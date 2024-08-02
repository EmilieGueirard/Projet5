import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='navBar'>
        <img className='navBar__logo' src={logo} alt='Logo Kasa' />
      <nav>
        <ul className='navBar__nav'>
          <li className='navBar__nav--link'><Link to="/accueil">Accueil</Link></li>
          <li className='navBar__nav--link'><Link to="/a-propos">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;