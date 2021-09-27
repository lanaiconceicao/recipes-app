import PropTypes from 'prop-types';
import React from 'react';

const Instructions = ({ instruction }) => (
  <div data-testid="instructions">
    {instruction}
  </div>
);

Instructions.propTypes = {
  instruction: PropTypes.string.isRequired,
};

export default Instructions;
