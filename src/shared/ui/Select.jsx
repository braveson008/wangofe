import React from "react";

const Select = ({ options, onChange, value, placeholder }) => {
  return (
    <select onChange={onChange} value={value}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
