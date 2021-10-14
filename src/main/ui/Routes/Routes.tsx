import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Error404 } from "../Error404/Error404";
import { Registration } from "../Registration/Registration";
import { Profile } from "../Profile/Profile";
import { ResetPassword } from "../ResetPassword/ResetPassword";
import { CreateNewPassword } from "../CreateNewPassword/CreateNewPassword";
import { SuperComponents } from "../SuperComponents/SuperComponents";
import { LogIn } from "../LogIn/LogIn";

export enum Path {
  LogIn = "/login",
  Registration = "/registration",
  Profile = "/profile",
  ResetPassword = "/resetPassword",
  CreateNewPassword = "/createNewPassword",
  SuperComponents = "/superComponents",
  Error404 = "/404",
}

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} render={() => <div>Empty page</div>} />
        <Route path={Path.LogIn} render={() => <LogIn />} />
        <Route path={Path.Registration} render={() => <Registration />} />
        <Route path={Path.Profile} render={() => <Profile />} />
        <Route path={Path.ResetPassword} render={() => <ResetPassword />} />
        <Route
          path={Path.CreateNewPassword}
          render={() => <CreateNewPassword />}
        />
        <Route path={Path.SuperComponents} render={() => <SuperComponents />} />
        <Route path={Path.Error404} render={() => <Error404 />} />
        <Redirect from={"*"} to={Path.Error404} />
      </Switch>
    </div>
  );
};
