import axios from "axios";


export default class FindService {
    static async findAll(data) {
        const response = await axios.post(`http://localhost:5000/api/post/search`, data);
        return response.data;
    }
}