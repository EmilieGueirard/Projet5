import React from 'react';
import logo from '../assets/images/logo-white.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={logo} alt='logo Kasa'/>
      <p className='footer__text'>&copy; 2020 Kasa. All <br className="footer__text--break" /> rights reserved.</p>
    </footer>
  );
};

export default Footer;