import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      Login Form
      <Link to="/login/create">Criar Login</Link>
    </div>
  );
};

export default LoginForm;
