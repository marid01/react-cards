import {Dispatch} from "redux";
import {cardsAPI} from "../dal/password-api/passwordAPI";
import {AxiosError} from "axios";

type InitStateType = typeof initState;

const initState = {
  info: '',
  error: '',
};

// reducer
export const createNewPasswordReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "CREATE-NEW-PASSWORD/SET-INFO":
            return {...state, info: action.info};
        case "CREATE-NEW-PASSWORD/SET-ERROR":
            return {...state, error: action.error};
        default:
            return state;
    }
};

// action
type ActionType = ReturnType<typeof setNewPasswordInfoAC> | ReturnType<typeof setNewPasswordErrorAC>;

export const setNewPasswordInfoAC = (info: string) => ({type: 'CREATE-NEW-PASSWORD/SET-INFO', info} as const);
export const setNewPasswordErrorAC = (error: string) => ({type: 'CREATE-NEW-PASSWORD/SET-ERROR', error} as const);

// thunk
export const createNewPasswordTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
    cardsAPI.setNewPassword(password, resetPasswordToken)
        .then((res) => {
            dispatch(setNewPasswordInfoAC(res.data.info));
        })
        .catch((error: AxiosError) => {
            let errorMessage = error.response?.data.error
            //console.log(errorMessage);
            dispatch(setNewPasswordErrorAC(errorMessage));
        })
};
