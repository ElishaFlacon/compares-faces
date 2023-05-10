from deepface import DeepFace
from db import DataBase
import os


database = DataBase()


class RecognizerService():
    upload_path = os.environ.get("UPLOAD_FOLDER_PATH")

    # comparison two faces
    def comparison_faces(self, pic_1, pic_2):
        result = DeepFace.verify(
            f'{self.upload_path}/{pic_1}',
            f'{self.upload_path}/{pic_2}',
            enforce_detection=False
        )

        return {
            'verified': result['verified'],
            'distance': result['distance'],
        }

    # detect face in a picture
    def detect_face(self, picture):
        DeepFace.extract_faces(f'{self.upload_path}/{picture}')
        # if it won't work then work exception in controller
        return {'detect': True, 'picture': picture}
