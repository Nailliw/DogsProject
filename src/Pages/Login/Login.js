import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <div>
      <Switch>
        <Route path="/">
          <LoginForm />
        </Route>
        <Route path="/login/create">
          <LoginCreate />
        </Route>
      </Switch>
    </div>
  );
};

export default Login;
