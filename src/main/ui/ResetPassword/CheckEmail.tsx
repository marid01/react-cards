import React from "react";
import {useDispatch} from "react-redux";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {useHistory} from "react-router-dom";
import {setResetPasswordInfoAC} from "../../bll/resetPasswordReducer";

export const CheckEmail = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const navigateTo = () => {
        history.push('/');
        dispatch(setResetPasswordInfoAC(''));
    };

    return <div>

        <h3>It-incubator</h3>
        <h2>Check Email</h2>
        <div>
            We've sent an Email width instruction to yor Email.
        </div>

        <SuperButton type={'submit'} style={{width: '200px', borderRadius: '30px'}} onClick={navigateTo}
        >Ok</SuperButton>

    </div>;
};
