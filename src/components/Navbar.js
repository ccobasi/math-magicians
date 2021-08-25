import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="right">
      <li id="logo">Math Magicians</li>
      <li><Link className="links" to="/quotes">Quotes</Link></li>
      <li><Link className="links" to="/calculator">Calculator</Link></li>
      <li><Link className="links" to="/">Home </Link></li>
    </ul>
  </nav>
);

export default Navbar;
