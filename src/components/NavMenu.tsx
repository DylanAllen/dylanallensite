import * as React from 'react'
import { Link } from 'react-router-dom'

const NavMenu: React.FunctionComponent<any> = () => {

  return (
    <nav id="mainnav">
      <Link tabIndex={4} to="/blog">Blog</Link>
      <Link tabIndex={3} to="/resume">Resume</Link>
      <Link tabIndex={2} to="/about">About</Link>
      <Link tabIndex={1} to="/">Home</Link>
    </nav>
  )
}

export default NavMenu