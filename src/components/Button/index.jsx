import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, handleClick }) => (
  <button
    type="button"
    onClick={ handleClick }
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
