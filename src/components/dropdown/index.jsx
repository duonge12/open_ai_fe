import React from 'react';

export const DropdownList = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      className="border p-2 rounded"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

