// bootstrap navbar code
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const NavBar = () => {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Blog</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>
     );
}
export default NavBar;