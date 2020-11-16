import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginForm from "./LoginForm/LoginForm";
import LoginRecovery from "./LoginRecovery/LoginRecovery"
import LoginReset from "./LoginReset/LoginReset"

const Login = () => {
  return (
    <div>
      <Switch>
        {/* PAGINA DE LOGIN */}
        <Route path="/">
          <LoginForm />
        </Route>
        {/* CRIAR LOGIN */}
        <Route path="/login/create">
          <LoginCreate />
        </Route>
        {/* PERDER E RECUPERAR SENHA */}
        <Route path="/login/recovery">
          <LoginRecovery/>
        </Route>
        <Route path="/login/reset">
          <LoginReset />
        </Route>
      </Switch>
    </div>
  );
};

export default Login;
