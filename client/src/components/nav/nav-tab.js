import React from 'react'
import { Link } from 'react-router-dom'

const NavTab = ({ path, title, count }) => (
  <li className="nav-item">
    <Link to={path} className="nav-link">
      {title}
      {count ? (
        <span className="badge badge-primary" style={{ marginLeft: '10px' }}>
          {count}
        </span>
      ) : (
        ''
      )}
    </Link>
  </li>
)

export default NavTab
