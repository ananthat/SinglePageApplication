import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page-one">Page One</Link></li>
        <li><Link to="/page-two">Page Two</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
