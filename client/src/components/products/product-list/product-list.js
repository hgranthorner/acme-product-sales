import React, { Fragment } from 'react'
import Product from './product'

const ProductList = ({ products, removeProduct }) => (
  <ul className="list-group">
    {products.map(product => (
      <Product product={product} key={product.id} removeProduct={removeProduct} />
    ))}
  </ul>
)

export default ProductList
