import React from 'react';
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/"><img src={logo} alt="Logo Kasa" /></Link>
    );
  };

  export default Logo