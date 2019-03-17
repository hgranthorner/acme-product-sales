import React from 'react'
import { Link } from 'react-router-dom'

const NavTab = ({ path, title }) => (
  <li className="nav-item">
    <Link to={path} className="nav-link">
      {title}
    </Link>
  </li>
)

export default NavTab
