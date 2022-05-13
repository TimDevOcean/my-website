import React, { useState } from "react";
import logo from "../img/logo.png";
import { Slant as Hamburger } from 'hamburger-react';
import Menu from "./Menu";
import { Link } from 'react-router-dom';

export default function Header() {

  const [menuicon, setMenuIcon] = useState('closed');

  function handleMenuIcon(menuIconState) {
    setMenuIcon(menuIconState);
  }

  return (
    <header>
      <div className="nav-grid app-body">
        <div className="nav-grid-item">
          <Link to="/"><img className='logo' src={logo} alt=""/></Link>
        </div>

        <div className="nav-grid-item nav">
          <div className="menu">
            {menuicon === 'opened' ? <Menu /> : <Menu visibility="hide" />}
          </div>
          <Hamburger size={48} onToggle={toggled => {
              if (toggled) {
                handleMenuIcon('opened');
              } else {
                handleMenuIcon('closed');
              }
            }
            } />
        </div>
      </div>
    </header>
  )
}
