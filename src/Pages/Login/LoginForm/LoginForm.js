import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json;
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={username}
          type="text"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          value={password}
          type="password"
          onChange={(target) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/create">Criar Login</Link>
      <Link to="/login/recovery">Recuperar Senha</Link>
      <Link to="/login/reset">Resetar Senha</Link>
    </div>
  );
};

export default LoginForm;
