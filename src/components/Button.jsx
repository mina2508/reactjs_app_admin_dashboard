import React from 'react';

const Button = ({ color, text, borderRadius, backgroundColor, size }) => {
  const classes = `text-${size} p-3 hover:drop-shadow-xl`;
  return (
    <button
      style={{ color, backgroundColor, borderRadius }}
      className={classes}
    >
      {text}
    </button>
  );
};

export default Button;
