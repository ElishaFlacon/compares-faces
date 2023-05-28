import axios from "axios";


export default class UploadService {
    static async uploadPerson(data) {
        const response = await axios.post(`/api/post/upload-person`, data);
        return response.data;
    }
}