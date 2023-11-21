import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import MobileNavbar from './MobileNavbar'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo Violeta Eliz" height="40" />
        </NavLink>
        <MobileNavbar />
      </div>
    </nav>
  );
}

export default Navbar;
