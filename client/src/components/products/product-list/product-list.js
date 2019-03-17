import React from 'react'
import Product from './product'

const ProductList = ({ products }) => (
  <ul className="list-group">
    {products.map(product => (
      <Product product={product} key={product.id} />
    ))}
  </ul>
)

export default ProductList
