import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST } from '../../../api';
import Button from '../../../Components/Forms/Button';
import Input from '../../../Components/Forms/Input';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });

    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" />

        <Input label="Senha" type="password" name="password" />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Criar Login</Link>
      <Link to="/login/recovery">Recuperar Senha</Link>
      <Link to="/login/reset">Resetar Senha</Link>
    </div>
  );
};

export default LoginForm;
