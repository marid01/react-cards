import { useFormik } from "formik";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import {loginTC} from "../../bll/logInReducer";
import {RootStateType} from "../../bll/store";

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}


export const LogIn = () => {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector<RootStateType, boolean>(state => state.logIn.isLoggedIn)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Введите пароль. Поле не может быть пустым';
      } else if (values.password.length < 5) {
        errors.password = 'Пароль должен быть больше 5 символов';
      }
      return errors;
    },
    onSubmit: values => {
        dispatch(loginTC(values))
      formik.resetForm()
    },
  });

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }
  return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && <div style={{"color": 'red'}}>{formik.errors.email}</div>}
        <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && <div style={{"color": 'red'}}>{formik.errors.password}</div>}
        <input
            type="checkbox"
            name="rememberMe"
            onChange={formik.handleChange}
            checked={formik.values.rememberMe}

        />

        <button type="submit">Submit</button>
      </form>
  );
};


