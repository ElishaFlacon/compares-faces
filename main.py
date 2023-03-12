import os
from flask import Flask, request
from dotenv import load_dotenv, find_dotenv
from app.file.file_controller import FileController
from app.face.face_controller import FaceController
from app.clear_folder.clear_folder import clear_folder


app = Flask(__name__)
load_dotenv(find_dotenv())


@app.route('/api/post/face-verify', methods=['POST'])
def verify():
    pictures = FileController.upload_pictures(request.files)
    if (not pictures):
        return 'u stupid'

    verify_result = FaceController.face_verify(pictures)
    return verify_result


# this is necessary so that the static folder is not clogged
# because there are restrictions on the allowed size on free hosting
@app.route('/api/clear', methods=['DELETE'])
def clear():
    clear_folder(os.environ.get('UPLOAD_FOLDER_PATH'))
    return 'clear'


if __name__ == '__main__':
    # for development
    app.run()

    # for production
    # from waitress import serve
    # serve(app, host="0.0.0.0", port=5000)
