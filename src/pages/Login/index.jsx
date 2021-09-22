import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { validateEmail, validatePassword } from './helpers';
import Context from '../../context/Context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnIsDisabled, setBtnDisabled] = useState(true);
  const { handleSubmitLogin } = useContext(Context);
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => (
    name === 'email'
      ? setEmail(value)
      : setPassword(value));

  useEffect(() => {
    const validation = validateEmail(email) && validatePassword(password);
    if (validation) setBtnDisabled(false);
    else setBtnDisabled(true);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitLogin(email);
    history.push('/comidas');
  };
  return (
    <main>
      <form onSubmit={ handleSubmit }>
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
      </form>
    </main>
  );
};

export default Login;
