import * as React from 'react'
import { Link } from 'react-router-dom'

const NavMenu: React.FunctionComponent<any> = () => {

  return (
    <nav id="mainnav">
      <Link to="/blog">Blog</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
    </nav>
  )
}

export default NavMenu