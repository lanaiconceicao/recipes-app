import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ children, dataTestId, disabled, onClick, submitBtn }) => (
  <button
    className={ style.button }
    data-testid={ dataTestId }
    disabled={ disabled }
    onClick={ onClick }
    type={ submitBtn ? 'submit' : 'button' }
  >
    {children}
  </button>
);

Button.defaultProps = {
  dataTestId: '',
  disabled: false,
  onClick: null,
  submitBtn: false,
};

const { bool, func, node, string } = PropTypes;

Button.propTypes = {
  children: node.isRequired,
  dataTestId: string,
  disabled: bool,
  onClick: func,
  submitBtn: bool,
};

export default Button;
