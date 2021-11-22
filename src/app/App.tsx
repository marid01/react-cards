import React, {useEffect} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Dispatch} from "redux";
import style from "./App.module.scss";
import {Login} from "../a1-root/Login/Login";
import {Profile} from "../a1-root/Profile/Profile";
import Registration from "../a1-root/Registration/Registration";
import Page404 from "../a1-root/Page_404/Page404";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./appReducer";
import {AppRootStateType} from "./store";
import {Preloader} from "../a1-root/common/Preloader/Preloader";
import {Header} from "../a1-root/Header/Header";
import {ForgotPassword} from "../a1-root/fogotPassword/ForgotPassword";
import {CheckEmail} from "../a1-root/fogotPassword/CheckEmail";
import {SetPassword} from "../a1-root/setPassword/SetPassword";


function App() {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(initializeApp())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className={style.wrapper}>
            {!isInitialized && <Preloader/>}
            {isLoggedIn && <Header/>}
            <Switch>
                <Route exact path={PATH.PET_LOGIN} render={() => <Login/>}/>
                <Route exact path={PATH.PET_REGISTRATION} render={() => <Registration/>}/>
                <Route exact path={PATH.PET_PROFILE} render={() => <Profile/>}/>
                <Route exact path={PATH.PET_PAGE404} render={() => <Page404/>}/>
                <Route exact path={PATH.PET_FORGOT_PASSWORD} render={() => <ForgotPassword/>}/>
                <Route  path={PATH.PET_SET_PASSWORD } render={() => <SetPassword/>}/>
                <Route exact path={PATH.PET_CHECK_EMAIL} render={() => <CheckEmail/>}/>
                <Redirect to={PATH.PET_PROFILE}/>
            </Switch>
        </div>
    )
}

export default App;

export const PATH = {
    PET_LOGIN: '/login',
    PET_REGISTRATION: '/registration',
    PET_PROFILE: '/profile',
    PET_PAGE404: '/page404',
    PET_FORGOT_PASSWORD: '/forgot-password',
    PET_SET_PASSWORD: '/set-new-password/:token',
    PET_CHECK_EMAIL: '/check-email',
    PET_CARD: '/My-pet-project/card'
}
