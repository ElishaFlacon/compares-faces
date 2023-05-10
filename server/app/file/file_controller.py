from app.file.file_service import FileService


fileService = FileService()


class FileController():
    # upload two pictures
    def upload_pictures(self, pictures):
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
                'first_pic': fileService.save_file(first_pic),
                'second_pic': fileService.save_file(second_pic),
            }

            return pictures_dict
        except Exception as e:
            print(e)
            raise Exception('bad request: 400')

    # upload picture
    def upload_picture(self, picture):
        try:
            picture = picture['picture']

            # check filename
            if picture.filename == '':
                return

            # save and return file name
            return fileService.save_file(picture)
        except Exception as e:
            print(e)
            raise Exception('bad request: 400')
