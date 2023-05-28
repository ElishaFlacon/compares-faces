import axios from "axios";


export default class FindService {
    static async findAll(data) {
        const response = await axios.post(`/api/post/search`, data);
        return response.data;
    }
}