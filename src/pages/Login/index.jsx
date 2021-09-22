import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from './helpers';
import { Button } from '../../components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnIsDisabled, setBtnDisabled] = useState(true);

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
    <div>
      <input
        onChange={ handleChange }
        name="email"
        value={ email }
        type="text"
        data-testid="email-input"
      />
      <input
        onChange={ handleChange }
        name="password"
        value={ password }
        type="password"
        data-testid="password-input"
      />
      <button
        disabled={ btnIsDisabled }
        type="submit"
        data-testid="login-submit-btn"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
