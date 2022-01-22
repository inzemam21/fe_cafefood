import React from 'react';
import {faBars,faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {

    const renderNavbar = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} />
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link" href="/">Browse</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Cart</a>
        </li>
        
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    </div>
  </div>
</nav>
    
    )
  return <>{renderNavbar()}</>;
};

export default Navbar;
