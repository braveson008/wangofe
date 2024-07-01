import React from "react";

const Button = ({ onClick, children, type, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
