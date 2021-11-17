import React, {ChangeEvent, FormEvent, useState} from "react";
import {SuperInputText} from "../common/SuperInputText/SuperInputText";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {NavLink, Redirect} from "react-router-dom";
import {Path} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordTC, setResetPasswordErrorAC} from "../../bll/resetPasswordReducer";
import {RootStateType} from "../../bll/store";


export const ResetPassword = () => {

    const info = useSelector<RootStateType, string>(state => state.resetPassword.info)

    const error = useSelector<RootStateType, string>(state => state.resetPassword.error)

    const dispatch = useDispatch()

    const message = `<div style="background-color: lime; padding: 15px">
                    password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>
                    link</a></div>`

    const [email, setEmail] = useState('')

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        dispatch(setResetPasswordErrorAC(''))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reloading when button was pressed
        dispatch(resetPasswordTC(email, message));
    }

    if (!!info) { // if user email has founded in database redirect to page with further instruction

        return <Redirect to={'/check-email'} />

    }

    return <div>Reset password

        <h3>It-incubator</h3>
        <h2>Forgot your password?</h2>

        <form onSubmit={onSubmit}>

            <label>
                <SuperInputText value={email} placeholder={'Email'} onChange={onEmailChange}/>
                {error !== ''
                    ? <div style={{color: 'red', fontWeight: 500}}>{error}</div>
                    : <div>Enter your email address and we will send you further instruction</div>
                }
            </label>

            <SuperButton type={'submit'} style={{width: '200px', borderRadius: '30px'}}
            >Send instruction</SuperButton>
        </form>

        <p>Did you remember your password?</p>

        <div>
            <NavLink to = {Path.LogIn} activeClassName={''}>Try logging in</NavLink>
        </div>

    </div>;
};
