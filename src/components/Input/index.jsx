import React from 'react';
import Proptypes from 'prop-types';

function Input(props) {
  const { handleChange, name, label, value } = props;
  return (
    <div>
      <label htmlFor={ name }>
        { label }
        <input
          value={ value }
          type="text"
          name={ name }
          data-testid={ `${name}-input` }
          onChange={ handleChange }
          id={ name }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  handleChange: Proptypes.func,
  datatestid: Proptypes.string,
  name: Proptypes.string,
  label: Proptypes.string,
}.isrequired;

export default Input;
