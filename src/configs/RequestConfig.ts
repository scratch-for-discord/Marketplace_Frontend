import axios from "axios";
let RequestConfig = axios.create({
    baseURL: "http://localhost:3020/",
    withCredentials: true,
})
export default RequestConfig;