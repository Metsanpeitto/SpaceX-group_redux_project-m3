import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/planet.svg';

const Navbar = () => (
  <nav className="c-navBar">
    <img src={Logo} alt="" className="logo" />
    <h1 className="title">Space Travelers` Hub</h1>
    <ul className="menuNav">
      <li key={1}>
        <Link to="/" active="true" exact="true">
          Rockets
        </Link>
      </li>
      <li key={2}>
        <Link to="/dragons" active="true" exact="true">
          Dragons
        </Link>
      </li>
      <li key={3}>
        <Link to="/missions" exact="true">
          Missions
        </Link>
      </li>
      |
      <li key={4}>
        <Link to="/myprofile" exact="true">
          My Profile
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
