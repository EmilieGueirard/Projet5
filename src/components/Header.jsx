import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/apropos">A propos</Link></li>
          <li><Link to="/appartement">Appartement</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;