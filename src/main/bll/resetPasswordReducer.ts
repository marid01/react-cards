import {Dispatch} from "redux";
import {cardsAPI} from "../dal/password-api/passwordAPI";
import {AxiosError} from "axios";

type InitStateType = typeof initState;

const initState = {
    info: '',
    error: '',
};

// reducer
export const resetPasswordReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "RESET-PASSWORD/SET-INFO":
            return {...state, info: action.info};
        case "RESET-PASSWORD/SET-ERROR":
            return {...state, error: action.error};
        default:
            return state;
    }
};

// action
type ActionType = ReturnType<typeof setResetPasswordInfoAC> | ReturnType<typeof setResetPasswordErrorAC>;

export const setResetPasswordInfoAC = (info: string) => ({type: 'RESET-PASSWORD/SET-INFO', info} as const);

export const setResetPasswordErrorAC = (error: string) => ({type: 'RESET-PASSWORD/SET-ERROR', error} as const);


// thunk
export const resetPasswordTC = (email: string, message: string) => (dispatch: Dispatch) => {
    cardsAPI.resetPassword(email, message)
        .then((res) => {
            dispatch(setResetPasswordInfoAC(res.data.info));
        })
        .catch((error: AxiosError) => {
            let errorMessage = error.response?.data.error
            //console.log(errorMessage);
            dispatch(setResetPasswordErrorAC(errorMessage));
        })
};
