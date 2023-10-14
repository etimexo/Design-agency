import React from 'react';
import "../components/Header.css";

export default function Header() {
  return (
    <nav>
        <div className="d">
          <a href="#" className="blog-link nav-link">
            Blog
          </a>
          <a href="#" className="contact-link nav-link">
            Contact
          </a>
        </div>

        <a href="#">
          <div className="logo">Gyme</div>
        </a>

        <div className="toggler">
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <a className="desktop" href="#">
          <button className="sign-btn">SIGN UP</button>
        </a>

        <ul className="navmenu">
          <a href="#">
            <button className="sign-btn">SIGN UP</button>
          </a>
        </ul>
      </nav>
  )
}
