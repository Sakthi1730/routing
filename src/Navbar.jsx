import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container d-flex justify-content-center align-items-center">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" >
          <li className="nav-item active col-5 text-center">
            <Link to={"/"} className="nav-link">All</Link>
          </li>
          <li className="nav-item col-5 text-center">
            <Link to={"/Fsd"} className="nav-link">Full Stack Development</Link>
          </li>
          <li className="nav-item col-5 text-center">
            <Link to={"/Ds"} className="nav-link">Data science</Link>
          </li>
          <li className="nav-item col-5 text-center">
            <Link to={"/Cs"} className="nav-link">Cyber Security</Link>
          </li>
          <li className="nav-item col-5 text-center">
            <Link to={"/Career"} className="nav-link">Career</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar