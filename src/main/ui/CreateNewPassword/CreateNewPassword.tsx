import React, {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SuperInputText} from "../common/SuperInputText/SuperInputText";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {Redirect, useParams} from "react-router-dom";
import {createNewPasswordTC, setNewPasswordErrorAC} from "../../bll/createNewPasswordReducer";
import {RootStateType} from "../../bll/store";

export const CreateNewPassword = () => {

  const info = useSelector<RootStateType, string>(state => state.createNewPassword.info)

  const error = useSelector<RootStateType, string>(state => state.createNewPassword.error)

  const dispatch = useDispatch()

  let {token} = useParams<{token: string}>();

  const [password, setPassword] = useState('')

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    dispatch(setNewPasswordErrorAC(''));
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reloading when button was pressed
    dispatch(createNewPasswordTC(password, token));
  }

  if (info !== '') {
    alert(info) // show success password change message
    return <Redirect to={'/login'} />
  }

  return <div>Create New Password Page

    <h3>It-incubator</h3>
    <h2>Create new password</h2>

    <form onSubmit={onSubmitHandler}>

      <label>
        <SuperInputText value={password} placeholder={'New password'} onChange={onPasswordChange}/>
        {error !== ''
            ? <div style={{color: 'red', fontWeight: 500}}>{error}</div>
            : <div>Enter your New Password and we will save it for you</div>
        }
      </label>

      <SuperButton type={'submit'} style={{width: '200px', borderRadius: '30px'}}
      >Create new password</SuperButton>
    </form>

  </div>;
};
