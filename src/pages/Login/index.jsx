import React, { useContext, useEffect, useState } from 'react';
import { validateEmail, validatePassword } from './helpers';
import Context from '../../context/Context';
import { Button, Input } from '../../components';
import style from './Login.module.css';
import logo from '../../images/international-business.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnIsDisabled, setBtnDisabled] = useState(true);
  const { handleSubmitLogin } = useContext(Context);

  const handleChange = ({ target: { name, value } }) => (
    name === 'email'
      ? setEmail(value)
      : setPassword(value));

  useEffect(() => {
    const validation = validateEmail(email) && validatePassword(password);
    if (validation) setBtnDisabled(false);
    else setBtnDisabled(true);
  }, [email, password]);

  return (
    <section className={ style.section }>
      <h1 className={ style.logo }>
        <img src={ logo } alt="Logo do site" />
        <span>App de Receitas</span>
      </h1>
      <form className={ style.form } onSubmit={ (e) => handleSubmitLogin(e, email) }>
        <Input
          onChange={ handleChange }
          name="email"
          placeholder="Insira o seu email"
          label="E-mail"
          value={ email }
          dataTestId="email-input"
        />
        <Input
          onChange={ handleChange }
          name="password"
          label="Senha"
          placeholder="Insira a sua senha"
          value={ password }
          type="password"
          dataTestId="password-input"
        />
        <Button
          disabled={ btnIsDisabled }
          dataTestId="login-submit-btn"
          submitBtn
        >
          Login
        </Button>
      </form>
    </section>
  );
};

export default Login;
