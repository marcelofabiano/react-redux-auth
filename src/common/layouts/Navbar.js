import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => (
  <ul>
    <li>
      <Link to='/dashboard'>Dashboard</Link>
    </li>
    <li>
      <Link to='/companies'>Companies</Link>
    </li>
  </ul>
)

export default Navbar
