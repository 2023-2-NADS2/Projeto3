// MobileNavbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MobileNavbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  function getNavLinkClass(path) {
    return ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');
  }

  return (
    <>
      <button 
        className="navbar-toggler" 
        type="button" 
        aria-expanded={isNavExpanded ? "true" : "false"} 
        aria-label="Toggle navigation"
        onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse" + (isNavExpanded ? " show" : "")} id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/about-us" className={getNavLinkClass('/')} end>Quem Somos</NavLink>
          <NavLink to="/projects" className={getNavLinkClass('/projects')}>Projetos</NavLink>
          <NavLink to="/initiatives" className={getNavLinkClass('/initiatives')}>Iniciativas</NavLink>
          <NavLink to="/contribute" className={getNavLinkClass('/contribute')}>Contribua</NavLink>
          <NavLink to="/contact" className={getNavLinkClass('/contact')}>Contato</NavLink>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
