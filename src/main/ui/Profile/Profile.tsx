import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { logoutTC } from "../../bll/logInReducer";
import {RootStateType} from "../../bll/store";


export const Profile = () => {
    const isLoggedIn = useSelector<RootStateType, boolean>((state) => state.logIn.isLoggedIn)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    return (
        <div>
            Profile
            {isLoggedIn && <button onClick={logoutHandler}>logout</button>}
        </div>
    )
};
