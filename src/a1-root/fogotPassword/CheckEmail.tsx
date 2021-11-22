import React from 'react';
import {useLocation} from "react-router";
import {AuthModal} from "../common/AuthModal/AuthModal";
import {EmailSvg} from "../../assets/icon/EmailSVG";
import style from "./ForgotPasswoed.module.scss";


export const CheckEmail: React.FC = React.memo(() => {

    //  const location = useLocation<any>()
    //
    //
    // let mail = location.state?.email

    return (
      <AuthModal subtitle='Check Email'>
          <div className={style.check}><EmailSvg/>
              <div className={style.check__email}>{`We’ve sent an Email with instructions to your address`}</div>
          </div>
      </AuthModal>

  );
})
