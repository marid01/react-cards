import {Dispatch} from "redux";
import {API} from "../dll/api";

enum DATA {
    IS_REGISTRATION = 'AUTH/IS_REGISTRATION',
    IS_ERROR = 'AUTH/IS_ERROR',
}

type InitStateType = {
    isSigned: boolean,
    errorText: string | null,
};

const initState: InitStateType = {
    isSigned: false,
    errorText: null,
};

export const registrationReducer = (state = initState, action: ActionsRegisterType): InitStateType => {
    switch (action.type) {
        case DATA.IS_REGISTRATION:
            return {...state, isSigned: action.isSigned}
        case DATA.IS_ERROR:
            return {...state, errorText: action.errorText}
        default:
            return state;
    }
};

//AC
export const setSignUp = (isSigned: boolean) => ({type: DATA.IS_REGISTRATION, isSigned} as const);
export const setError = (errorText: string | null) => ({type: DATA.IS_ERROR, errorText} as const);

//thunk
export const addNewUser = (email: string, password: string) => (dispatch: Dispatch) => {
    API.authRegistrate(email, password)
        .then(() => {
            dispatch(setSignUp(true))
        })
        .catch(err => {
            dispatch(setError(err.response.data.error))
        })
};

//types
type ActionsRegisterType = setSignUpType | setErrorType;
type setSignUpType = ReturnType<typeof setSignUp>;
type setErrorType = ReturnType<typeof setError>;