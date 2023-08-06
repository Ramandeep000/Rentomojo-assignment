import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink     >
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/sign-up">Sign-Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
