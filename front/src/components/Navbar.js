import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import "./Navbar.css";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <nav className="nav-container">
          <div className="nav-header">
            <Link to="/">
              <img
                src="images/banner-logo.png"
                alt="logo-button"
                role="button"
              />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignJustify className="nav-icon" />
            </button>
          </div>

          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Nos services</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
            <li>
              <Link to="/contact">Nous contacter</Link>
            </li>
            <li>
              <Link to="/job">Postuler</Link>
            </li>
            <li>
              <Link to="/partners">Partenaires</Link>
            </li>
            <li>
              <Link to="/gallery">Galerie</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
