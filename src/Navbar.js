import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Wildlife Monitoring</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/problem">Problem Statement</Link></li>
        <li><Link to="/solution">Solution</Link></li>
        <li><Link to="/challenges">Challenges</Link></li>
        <li><Link to="/quiz">Quiz</Link></li> {/* Add Quiz link */}
      </ul>
    </nav>
  );
}

export default Navbar;




