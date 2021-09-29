import React, { useContext, useEffect, useState } from 'react';
import { validateEmail, validatePassword } from './helpers';
import Context from '../../context/Context';
import { Button, Input } from '../../components';
import style from './Login.module.css';

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
      <form className={ style.form } onSubmit={ (e) => handleSubmitLogin(e, email) }>
        <Input
          onChange={ handleChange }
          name="email"
          label="Insira o seu email"
          value={ email }
          dataTestId="email-input"
        />
        <Input
          onChange={ handleChange }
          name="password"
          label="Insira sua senha"
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
