import React from 'react';
import Proptypes from 'prop-types';

function Input(props) {
  const { handleChange, name, label, value, type } = props;
  return (
    <div>
      <label htmlFor={ name }>
        { label }
        <input
          value={ value }
          type={ type }
          name={ name }
          data-testid={ `${name}-input` }
          onChange={ handleChange }
          id={ name }
        />
      </label>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  handleChange: Proptypes.func,
  datatestid: Proptypes.string,
  name: Proptypes.string,
  label: Proptypes.string,
  type: Proptypes.string,
}.isrequired;

export default Input;
