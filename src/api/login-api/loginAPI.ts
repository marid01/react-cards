import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
});

export const loginAPI = {
    login(data: LoginType) {
        return instance.post<LoginResponseType>('/auth/login', data)
    }
}

export const authAPI = {
    me() {
        return instance.post<LoginResponseType>("auth/me", {});
    },
    logout() {
        return instance.delete("auth/me", {});
    },
};

// types

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}


export type UserDataType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    token: string
    tokenDeathTime: Date
    __v: number
    error?: string
};

export type LoginResponseType = UserDataType
