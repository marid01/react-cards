import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {profileReducer} from "../a1-root/Profile/profileReducer";
import {page404Reduser} from "../a1-root/Page_404/pag404Reduser";
import {
    RegisterActionType,
    registrationReducer
} from "../a1-root/Registration/registrationReducer";
import {LoginActionType, loginReducer} from "../a1-root/Login/loginReducer";
import {AppActionType, appReducer} from "./appReducer";
import {
    ActionsForFogotPasswordType,
    forgotPasswordReduser
} from "../a1-root/fogotPassword/forgotPasswordReduser";
import {ActionsForSetPasswordType, setPasswordReduser} from "../a1-root/setPassword/setPasswordReduser";


const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    page404: page404Reduser,
    forgotPassword: forgotPasswordReduser,
    setPassword: setPasswordReduser,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type CommonActionTypeForApp = LoginActionType | AppActionType
    | ActionsForFogotPasswordType | ActionsForSetPasswordType
    | RegisterActionType;

export type InferActionType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;


// @ts-ignore
window.store = store;
