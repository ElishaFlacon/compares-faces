import axios from "axios";


export default class UploadService {
    static async uploadPerson(data) {
        const response = await axios.post(`https://dosy-backend-app.onrender.com/api/post/upload-person`, data);
        return response.data;
    }
}