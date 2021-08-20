import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <h1 className="title">Bookstore</h1>
    <ul className="menuNav">
      <li key={1}>
        <Link to="/" active="true" exact="true">
          BOOKS
        </Link>
      </li>
      <li key={2}>
        <Link to="/categories" exact="true">
          CATEGORIES
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
