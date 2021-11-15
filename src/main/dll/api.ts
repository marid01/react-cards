import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
});

export const cardsAPI = {
    resetPassword(data: RequestResetPassType) {
        return axios.post<RequestResetPassType, AxiosResponse<ResponseResetPassType>>('auth/forgot', data)
    },
};

export type RequestResetPassType = {
    email: string
    from: string
    message: string
}


export type ResponseResetPassType = {
    info: string
    error: string
};
