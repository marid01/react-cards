import React, {ChangeEvent, useState} from "react";
import {SuperInputText} from "../common/SuperInputText/SuperInputText";
import {SuperButton} from "../common/SuperButton/SuperButton";
import { NavLink } from "react-router-dom";
import {Path} from "../Routes/Routes";

export const ResetPassword = () => {

    const [email, setEmail] = useState('')

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    return <div>Reset password

        <h3>It-incubator</h3>
        <h2>Forgot your password?</h2>

        <form>

            <label>
                <SuperInputText value={email} placeholder={'Email'} onChange={onEmailChange}/>
                <div>Enter your email address and we will send you further instruction</div>
            </label>

            <SuperButton type={'submit'} style={{width: '200px', borderRadius: '30px'}}>Send instruction</SuperButton>
        </form>

        <p>Did you remember your password?</p>

        <div>
            <NavLink to = {Path.LogIn} activeClassName={''}>Try logging in</NavLink>
        </div>

    </div>;
};
