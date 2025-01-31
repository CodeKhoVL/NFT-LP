'use client';

import { useState } from 'react';
import Link from 'next/link';
import '@styles/app.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container">
      <span className="menu-trigger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="menu-trigger-bar top"></i>
        <i className="menu-trigger-bar middle"></i>
        <i className="menu-trigger-bar bottom"></i>
      </span>
      <span className="close-trigger" onClick={() => setIsMenuOpen(false)}>
        <i className="close-trigger-bar left"></i>
        <i className="close-trigger-bar right"></i>
      </span>
      <span className="logo">
        <span>
          ⬢
          <i className="logo-title">UI</i>
          <i className="logo-badge">6</i>
        </span>
      </span>
      <div className={`inner-container ${isMenuOpen ? 'open' : ''}`}>
        <i className="menu-bg top"></i>
        <i className="menu-bg middle"></i>
        <i className="menu-bg bottom"></i>
        <div className="menu-container">
          <ul className="menu">
            <li>
              <Link href="#">Login</Link>
            </li>
            <li>
              <Link href="#">Create account</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id='links'>
        <a id='twitter' href="https://twitter.com/karlovidek" target="_blank" rel="noopener noreferrer">
          <span className='fa fa-twitter'></span>
        </a>
        <div id='pens'>
          <a href="https://codepen.io/karlovidek/" target="_blank" rel="noopener noreferrer">
            <span className='fa fa-codepen'></span>
          </a> my other Pens
        </div>
      </div>
    </div>
  );
};

export default Navbar;
