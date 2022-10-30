import RequestConfig from "@/configs/RequestConfig";
import type User from "@/interfaces/User";
import axios, { AxiosError } from "axios";
interface Response {
    user: User;
    err: boolean;
}
export default async function GetUserData(): Promise<Response> {
    let response;
    let res: Response = {
        user: {
            banned: false
        },
        err: false,
    }
    try {
        
        response = await axios.get("http://localhost:3020/api/user", {
           // method: "GET",
            withCredentials: true,
            // url: "http://localhost:3020/api/user",
        })
        
        res.user = response.data
    } catch (error) {
        res.err = true;
        console.log(error, (error as AxiosError).status);
    }
    
    return res
}