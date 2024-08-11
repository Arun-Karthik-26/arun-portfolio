import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="nav-res">
        <div className='logo'>
          <FontAwesomeIcon icon={faGoogle} id='logo-icon'/>
          <h1 id='name'>arun261104@gmail.com</h1>
        </div>
        <button className='menu-button' onClick={toggleNavbar}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
      <div className={`navbar-items${isOpen ? 'active' : ''}`}>
          <a href="/" onClick={closeNavbar}>Home</a>
          <a href="#about" onClick={closeNavbar}>About</a>
          <a href="#skills" onClick={closeNavbar}>Skills</a>
          <a href="#projects" onClick={closeNavbar}>Project</a>
          <a href="#contact" onClick={closeNavbar}>Contact</a>
      </div>
    </div>
  );
}

export default Header;
