import {AppRootStateType, CommonActionTypeForApp, InferActionType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {actionsForLogin} from "../a1-root/Login/loginReducer";
import {authAPI} from "../api/auth-api/authAPI";


const initialState = {
    status: "idle",
    isInitialized: false,
    error: null,
} as AppInitialStateType;

export const appReducer =
    (state: InitialAppStateType = initialState, action: CommonActionTypeForApp): InitialAppStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status};
        case "APP/IS-INITIALIZED":
            return {...state, isInitialized: action.isInitialized};
        case "APP/SET-ERROR":
            return {...state, error: action.error};
        default:
            return state;
    }
};


// actions
export const actionsForApp = {
    setAppStatus: (status: StatusType) => ({type: "APP/SET-STATUS", status} as const),
    setAppError: (error: string | null) => ({type: "APP/SET-ERROR", error} as const),
    setIsInitialized: (isInitialized: boolean) => ({type: "APP/IS-INITIALIZED", isInitialized} as const),
};


// thunks
export const initializeApp = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        await authAPI.me();
        dispatch(actionsForLogin.setIsLoggedIn(true));
        dispatch(actionsForApp.setIsInitialized(true));
    } catch (e: any) {
        dispatch(actionsForApp.setIsInitialized(true));
        dispatch(actionsForApp.setAppStatus("failed"));
        const error = e.response.data.error === 'you are not authorized'
            ? null
            : e.response.data.error
                ? e.response.data.error
                : (e.message + ', more details in the console');
        dispatch(actionsForApp.setAppError(error));
    }
};


// types
export type InitialAppStateType = typeof initialState;
export type AppActionType = InferActionType<typeof actionsForApp>;
export type AppInitialStateType = {
    status: StatusType
    isInitialized: boolean
    error: string | null
};
export type StatusType = "idle" | "loading" | "succeeded" | "failed";
export type ThunkType = ThunkAction<void, AppRootStateType, unknown, CommonActionTypeForApp>;
export type ThunkDispatchType = ThunkDispatch<AppRootStateType, unknown, CommonActionTypeForApp>;

