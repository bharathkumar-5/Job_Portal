import React from 'react';

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={handleChange}
        type="radio"
        value={value} 
        name={name}
      />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default InputField;
