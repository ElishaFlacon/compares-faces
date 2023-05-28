import axios from "axios";


export default class FindService {
    static async findAll(data) {
        const response = await axios.post(`https://dosy-backend-app.onrender.com/api/post/search`, data);
        return response.data;
    }
}