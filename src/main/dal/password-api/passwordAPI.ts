import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
});

export const cardsAPI = {
    resetPassword(email: string, message: string) {
        return instance.post<RequestResetPassType, AxiosResponse<ResponseResetPassType>>('auth/forgot',{email, message})
    },
    setNewPassword(password: string, resetPasswordToken: string) {
      return  instance.post<RequestNewPasswordType, AxiosResponse<ResponseResetPassType>>('auth/set-new-password', {password, resetPasswordToken})
    },
};

export type RequestResetPassType = {
    email: string
    //from: string
    message: string
};

export type ResponseResetPassType = {
    info: string
    //error: string
};

export type RequestNewPasswordType = {
    password: string
    resetPasswordToken: string
};


