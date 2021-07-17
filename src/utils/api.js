import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});
export default api
