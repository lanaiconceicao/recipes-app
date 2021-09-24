import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  dataTestId,
  handleChange,
  label,
  name,
  type,
  value,
}) => (
  <label htmlFor={ name }>
    { label }
    <input
      value={ value }
      type={ type }
      name={ name }
      data-testid={ dataTestId }
      onChange={ handleChange }
      id={ name }
    />
  </label>

);

Input.defaultProps = {
  dataTestId: '',
  handleChange: null,
  name: '',
  type: 'text',
};

const { func, string } = propTypes;

Input.propTypes = {
  dataTestId: string,
  handleChange: func,
  name: string,
  label: string.isRequired,
  type: string,
  value: string.isRequired,
};

export default Input;
