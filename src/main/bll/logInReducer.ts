import {Dispatch} from "redux";
import {authAPI, loginAPI, LoginType, UserDataType} from "../../api/login-api/loginAPI";

type InitStateType = typeof initState;

const initState = {
    _id: '',
    avatar: '',
    email: '',
    isAdmin: false,
    name: '',
    publicCardPacksCount: 0,
    rememberMe: false,
    verified: false,
    updated: {},
    created: {},
    isLoggedIn: false,
    token: '',
    tokenDeathTime: {},
    __v: 0,
} as UserDataDomainType;

export const logInReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (data: LoginType) => (dispatch: Dispatch<ActionsType>) => {
    loginAPI.login(data).then((res) => {
        dispatch(setIsLoggedInAC(true))
    }).catch((error) => {
        console.log(error)
    })
}

export const initializeTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        dispatch(setIsLoggedInAC(true))
    })
}

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logout().then((res) => {
        dispatch(setIsLoggedInAC(false))
    }).catch((error) => {
        console.log(error)
    })
}



// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
export type UserDataDomainType = UserDataType & { isLoggedIn: boolean };





