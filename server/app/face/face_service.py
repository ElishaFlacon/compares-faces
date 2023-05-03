from deepface import DeepFace
import db
import os

DB = db.DataBase()


class FaceService():
    @staticmethod
    # comparing two images
    def face_verify(pic_1, pic_2):
        result = DeepFace.verify(
            pic_1,
            pic_2,
            enforce_detection=False
        )

        return {
            'verified': result['verified'],
            'distance': result['distance'],
        }

    @classmethod
    def find_person(cls, picture):
        result = []

        DB.cursor.execute("SELECT * FROM faces;")
        data = DB.cursor.fetchall()

        for item in data:
            db_picture = f'{os.environ.get("UPLOAD_FOLDER_PATH")}/{item[1]}'

            verify = cls.face_verify(picture, db_picture)

            if not (verify['verified']):
                continue

            DB.cursor.execute(
                "SELECT * FROM person WHERE id=%s;", (item[2],))
            person = DB.cursor.fetchall()
            result.append([person, item[1]])

        return result
