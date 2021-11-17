import React, {useEffect, useState} from "react";
import {SuperInputText} from "../common/SuperInputText/SuperInputText";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {addNewUser, setError} from "../../bll/registrationReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {Path} from "../Routes/Routes";

export const Registration = () => {
    const dispatch = useDispatch();
    const errorText = useSelector<RootStateType, string | null>(state => state.registration.errorText);
    const isSigned = useSelector<RootStateType, boolean>(state => state.registration.isSigned);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setError(null))
        }, 5000)
    }, [dispatch, errorText]);

    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');
    let [samePassword, setSamePassword] = useState<string>('');

    const onClickHandler = () => {
        dispatch(addNewUser(email, password))
    };

    if (isSigned) {
        return <Redirect to={Path.LogIn}/>
    }

    return (
        <>
            <div>{errorText}</div>
            <SuperInputText value={email} onChangeText={setEmail}/>
            <SuperInputText value={password} onChangeText={setPassword}/>
            <SuperInputText value={samePassword} onChangeText={setSamePassword}/>
            <SuperButton onClick={onClickHandler}>SIGN UP</SuperButton>
        </>
    );
};
