import React from 'react';

const Button = ({ onClick, disabled, children, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-lg font-semibold py-2 px-4 rounded border-2 focus:outline-none focus:ring-2 ${className}`}
  >
    {children}
  </button>
);

export default Button;
