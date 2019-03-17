import React from 'react'

const Product = ({ product, removeProduct }) => {
  const priceStyle = product.discount ? { textDecoration: 'line-through' } : {}
  const availabilityClass = product.availability === 'instock' ? 'badge badge-success' : 'badge badge-warning'
  return (
    <li className="list-group-item">
      {product.name}
      <br />
      <span style={priceStyle}> {product.price}</span>
      <div style={{ marginBottom: '5px' }}>
        {product.discount ? <span className="badge badge-success">{product.discountedPrice}</span> : ''}
      </div>
      <span className={availabilityClass}>{product.availability}</span>
      <br />
      <button onClick={() => removeProduct(product.id)} type="button" className="btn btn-danger btn-sm">
        DELETE
      </button>
    </li>
  )
}

export default Product
