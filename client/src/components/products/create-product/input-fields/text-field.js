import React, { Fragment } from 'react'

const TextField = ({ inputField, title, value, handleChange }) => (
  <div>
    <label htmlFor={inputField}>{title}:</label>
    <input className="form-control" name={inputField} value={value} onChange={e => handleChange(e)} />
  </div>
)

export default TextField
