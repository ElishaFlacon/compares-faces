from app.recognizer.recognizer_service import RecognizerService


recognizerService = RecognizerService()


class RecognizerController():
    # comparasion two faces
    def comparison_faces(self, pictures):
        try:
            # get pictures
            first_pic = pictures['first_pic']
            second_pic = pictures['second_pic']

            # comparing pictures
            result = recognizerService.comparison_faces(first_pic, second_pic)

            return [bool(result['verified']), result['distance']]
        except Exception as e:
            print(e)
            raise Exception('bad request: 400')

    # detect face in a picture
    def detect_face(self, picture):
        try:
            result = recognizerService.detect_face(picture)

            return result
        except ValueError as e:
            return {'detect': False, 'picture': picture}
        except Exception as e:
            print(e)
            raise Exception('bad request: 400')
