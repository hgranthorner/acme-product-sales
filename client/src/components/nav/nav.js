import React from 'react'
import NavTab from './nav-tab'

const Nav = ({ productsCount, salesCount }) => (
  <ul className="nav nav-tabs">
    <NavTab path="/" title="Home" />
    <NavTab path="/products" title="Products" count={productsCount} />
    <NavTab path="/products/sales" title="Sales" count={salesCount} />
    <NavTab path="/products/create" title="Create" />
  </ul>
)

export default Nav
