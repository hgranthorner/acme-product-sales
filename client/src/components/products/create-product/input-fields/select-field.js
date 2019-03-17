import React from 'react'

const SelectField = ({ title, value, options, handleChange }) => (
  <div>
    <label>{title}:</label>
    <select value={value} onChange={e => handleChange(e)} className="form-control">
      {options.map((value, index) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  </div>
)

export default SelectField
