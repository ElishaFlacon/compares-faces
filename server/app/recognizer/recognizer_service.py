from deepface import DeepFace
import os


class RecognizerService():
    upload_path = os.environ.get("STATIC_PATH")

    # comparison two faces
    def comparison_faces(self, pic_1, pic_2):
        result = DeepFace.verify(
            f'{self.upload_path}/{pic_1}',
            f'{self.upload_path}/{pic_2}',
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
