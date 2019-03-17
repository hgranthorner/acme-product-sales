import React, { useState } from 'react'
import { TextField, SelectField } from './input-fields'
import axios from 'axios'

const CreateProduct = ({ addProduct }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [availability, setAvailability] = useState('instock')
  const availabilityOptions = ['instock', 'backordered', 'discontinued']

  const handleChange = (fn, e) => {
    fn(e.target.value)
  }

  const createProduct = e => {
    console.log(e)
    e.preventDefault()
    axios
      .post('/api/products', { data: { name, price, discount, availability } })
      .then(res => addProduct(res.data))
      .catch(e => console.error(`Failed to create product! Here's why:\n${e}`))
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
      <button type="submit" className="btn btn-primary">
        CREATE
      </button>
    </form>
  )
}

export default CreateProduct
