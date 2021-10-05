import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import fetchArea from '../../services/fetchArea';

const Select = ({ onChange }) => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetchArea().then((result) => setAreas(result));
  }, []);

  return (
    <select data-testid="explore-by-area-dropdown" onChange={ onChange }>
      <option value="">All</option>
      {areas
        .map((area, index) => (
          <option data-testid={ `${area}-option` } key={ index }>
            {area}
          </option>))}
    </select>
  );
};

Select.propTypes = {
  onChange: PropTypes.func,
}.isRequired;

export default Select;
