import React, { useState } from 'react'
import { TextField, SelectField } from './input-fields'

const CreateProduct = ({ createProduct }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [availability, setAvailability] = useState('instock')
  const availabilityOptions = ['instock', 'backordered', 'discontinued']

  const handleChange = (fn, e) => {
    fn(e.target.value)
  }

  return (
    <form onSubmit={createProduct}>
      <TextField inputField="name" title="Name" value={name} handleChange={e => handleChange(setName, e)} />
      <TextField inputField="price" title="Price" value={price} handleChange={e => handleChange(setPrice, e)} />
      <TextField inputField="discount" title="Discount Percentage" value={discount} handleChange={e => handleChange(setDiscount, e)} />
      <SelectField
        title="Availability"
        value={availability}
        options={availabilityOptions}
        handleChange={e => handleChange(setAvailability, e)}
      />
      <button type="submit">CREATE</button>
    </form>
  )
}

export default CreateProduct
