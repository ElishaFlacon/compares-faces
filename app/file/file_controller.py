from app.file.file_service import FileService


class FileController():
    # upload two pictures
    def upload_pictures(pictures):
        try:
            # checking for pictures availability
            if 'first_pic' not in pictures or 'second_pic' not in pictures:
                return

            # get pictures
            first_pic = pictures['first_pic']
            second_pic = pictures['second_pic']

            # check filename
            if first_pic.filename == '' or second_pic.filename == '':
                return

            # save and create dict
            pictures_dict = {
                'first_pic': FileService.save_file(first_pic),
                'second_pic': FileService.save_file(second_pic),
            }

            return pictures_dict
        except Exception as e:
            print(e)
            raise Exception('bad request: 400')
