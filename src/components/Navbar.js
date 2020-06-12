import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mylogo from '../images/mylogo.png';
import { FaAngleDoubleDown } from 'react-icons/fa';

class Navbar extends Component {
  state = { isOpen: false };
  toggleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={mylogo} alt="logo" />
            </Link>
            <button className="nav-btn" onClick={this.toggleNavbar}>
              <FaAngleDoubleDown className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trips">Trips</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
