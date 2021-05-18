import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import Home from "../Components/Home";
import LoginCreate from "../Components/Login/LoginCreate";
import LoginPasswordLost from "../Components/Login/LoginPasswordLost";
import LoginPasswordReset from "../Components/Login/LoginPasswordReset";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/login/criar" component={LoginCreate} />
      <Route exact path="/login/perdeu" component={LoginPasswordLost} />
      <Route exact path="/login/resetar" component={LoginPasswordReset} />
    </Switch>
  );
};

export default Routes;
