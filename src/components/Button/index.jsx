import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children }) => (
  <button type="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
