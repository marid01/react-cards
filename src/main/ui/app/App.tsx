import React, {useEffect} from "react";
import "./App.css";
import {useDispatch} from "react-redux";
import {Header} from "..//Header/Header";
import {Routes} from "../Routes/Routes";
import { initializeTC } from "../../bll/logInReducer";

export const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeTC())
    }, [])

    return (
        <div className="App">
            <Header/>
            <Routes/>
        </div>
    );
};
