from flask import Flask, request, send_file
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv, find_dotenv
from app.file.file_controller import FileController
from app.recognizer.recognizer_controller import RecognizerController
from app.person.person_controller import PersonController


app = Flask(__name__)
cors = CORS(app)
load_dotenv(find_dotenv())

fileController = FileController()
recognizerController = RecognizerController()
personController = PersonController()


@app.route('/api/get/image', methods=['GET'])
@cross_origin()
def get_image():
    file = request.args.get('name')
    path = f'app/static/{file}'
    return send_file(path, mimetype='image/png')


@app.route('/api/post/upload-person', methods=['POST'])
@cross_origin()
def upload_person():
    picture = fileController.upload_picture(request.files)

    if (not picture):
        return 'error'

    result = personController.new_person(request.form, picture)
    return result


@app.route('/api/post/compare', methods=['POST'])
@cross_origin()
def compare():
    pictures = fileController.upload_pictures(request.files)

    if (not pictures):
        return 'error'

    result = recognizerController.comparison_faces(pictures)
    return result


@app.route('/api/post/search', methods=['POST'])
@cross_origin()
def search():
    # if we know filename in fronted, so we can send it as a parameter from frontend
    picture = request.args.get('picture')

    if (not picture):
        picture = fileController.upload_picture(request.files)

    if (not picture):
        return 'error'

    result = personController.find_person(picture)
    return result


@app.route('/api/post/detect', methods=['POST'])
@cross_origin()
def detect():
    picture = fileController.upload_picture(request.files)

    if (not picture):
        return 'error'

    result = recognizerController.detect_face(picture)
    return result


if __name__ == '__main__':
    app.run()
