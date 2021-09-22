import React from 'react';

const Button = (props) => {
  const { type, text, handleClick } = props;
  return (
    <button
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
