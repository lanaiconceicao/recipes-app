import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = (
  { children, dataTestId, disabled, name, onClick, submitBtn, styleBtn },
) => (
  <button
    name={ name }
    className={ style.button }
    data-testid={ dataTestId }
    disabled={ disabled }
    onClick={ onClick }
    type={ submitBtn ? 'submit' : 'button' }
    style={ styleBtn }
  >
    {children}
  </button>
);

Button.defaultProps = {
  dataTestId: '',
  disabled: false,
  onClick: null,
  submitBtn: false,
  styleBtn: {},
  name: '',
};

const { bool, func, node, string, objectOf } = PropTypes;

Button.propTypes = {
  children: node.isRequired,
  dataTestId: string,
  disabled: bool,
  name: string,
  onClick: func,
  submitBtn: bool,
  styleBtn: objectOf(string),
};

export default Button;
