import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <h4>Studentenfutter</h4>
        </Link>  
        <Link to='/karte' className='links-ohnerahmen'>
        <div className='karte-icon'>
        <i className='fas fa-map-marked-alt'/>
        </div>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to='/berlin' className='nav-links' onClick={closeMobileMenu}>
              Startseite
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/karte'
              className='nav-links'
              onClick={closeMobileMenu}>
              Karte
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/einstellungen'
              className='nav-links'
              onClick={closeMobileMenu}>
              Einstellungen
            </Link>
          </li>
          
         <div className='Menü'><h1>Menü</h1></div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

