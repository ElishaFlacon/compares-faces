from deepface import DeepFace


class FaceService():
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
