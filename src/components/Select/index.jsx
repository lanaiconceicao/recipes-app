import React, { useState, useEffect } from 'react';
import fetchArea from '../../services/fetchArea';

const Select = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetchArea().then((result) => setAreas(result));
  }, []);

  console.log(areas);
  return (
    <select>
      {areas
        .map((area, index) => <option key={ index }>{area}</option>)}
    </select>
  );
};

export default Select;
