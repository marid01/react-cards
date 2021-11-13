import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
});

export const API = {
    authRegistrate(email: string, password: string) {
        return instance.post<RequestSignUpType, ResponseType>('auth/register', {email, password})
            .then(res => res.data)
    },
};
//types
type ResponseType = {
    data: {
        addUser: any,
        error?: string,
    }
};
type RequestSignUpType = {
    email: string,
    password: string,
};
