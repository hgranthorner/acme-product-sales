import React from 'react'

const Product = ({ product }) => (
  <li className="list-group-item">
    {product.name}
    {product.price}
  </li>
)

export default Product
