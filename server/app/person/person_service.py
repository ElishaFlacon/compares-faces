from app.recognizer.recognizer_service import RecognizerService
from db import DataBase
import os


database = DataBase()
recognizerService = RecognizerService()


class PersonService():
    upload_path = os.environ.get("UPLOAD_FOLDER_PATH")

    def new_person(self, data, picture):
        return

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
