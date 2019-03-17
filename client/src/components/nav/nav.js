import React from 'react'
import NavTab from './nav-tab'

const Nav = () => (
  <ul className="nav nav-tabs">
    <NavTab path="/" title="Home" />
    <NavTab path="/products" title="Products" />
    <NavTab path="/products/sales" title="Sales" />
    <NavTab path="/products/create" title="Create" />
  </ul>
)

export default Nav
