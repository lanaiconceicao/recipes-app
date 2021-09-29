import React from 'react';
import PropTypes from 'prop-types';
import style from './Input.module.css';

const Input = ({
  dataTestId,
  onChange,
  label,
  name,
  type,
  value,
}) => (
  <label className={ style.label } htmlFor={ name }>
    { label }
    <input
      className={ style.input }
      data-testid={ dataTestId }
      id={ name }
      name={ name }
      onChange={ onChange }
      placeholder={ label }
      type={ type }
      value={ value }
    />
  </label>

);

Input.defaultProps = {
  dataTestId: '',
  name: '',
  onChange: null,
  type: 'text',
};

const { func, string } = PropTypes;

Input.propTypes = {
  dataTestId: string,
  label: string.isRequired,
  name: string,
  onChange: func,
  type: string,
  value: string.isRequired,
};

export default Input;
