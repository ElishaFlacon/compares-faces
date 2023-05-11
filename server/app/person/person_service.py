from app.recognizer.recognizer_service import RecognizerService
from db import DataBase
import os


database = DataBase()
recognizerService = RecognizerService()


class PersonService():
    upload_path = os.environ.get("UPLOAD_FOLDER_PATH")

    def new_person(self, data):
        database.cursor.execute(
            "INSERT INTO person (fullname, age, sex, descripton) VALUES (%s,%s,%s,%s) RETURNING *;",
            (
                data.get('name'),
                data.get('age'),
                data.get('gender'),
                data.get('description')
            )
        )

        person = database.cursor.fetchall()
        person_id = person[0][0]

        database.cursor.execute(
            "INSERT INTO faces (picture, person_id) VALUES (%s, %s) RETURNING *;",
            (data.get('picture'), person_id)
        )

        picture_data = database.cursor.fetchall()

        # save data to database
        database.connect.commit()

        return {
            'load': True,
            'data': {
                'person': person,
                'picture': picture_data
            }
        }

    # find person from database
    def find_person(self, picture):
        result = []

        database.cursor.execute("SELECT * FROM faces;")
        data = database.cursor.fetchall()

        for item in data:
            db_picture = item[1]

            verify = recognizerService.comparison_faces(picture, db_picture)

            if not (verify['verified']):
                continue

            database.cursor.execute(
                "SELECT * FROM person WHERE id=%s;", (item[2],))
            person = database.cursor.fetchall()
            result.append({
                'picture': item[1],
                'name': person[0][1],
                'age': person[0][2],
                'gender': person[0][3],
                'description': person[0][4],
            })

        return result
