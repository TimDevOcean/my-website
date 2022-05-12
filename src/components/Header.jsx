import React, { useState } from "react";
import logo from "../img/logo.png";
import { Slant as Hamburger } from 'hamburger-react';
import Menu from "./Menu";

export default function Header() {

  const [menuicon, setMenuIcon] = useState('closed');

  function handleMenuIcon(menuIconState) {
    setMenuIcon(menuIconState);
  }

  return (
    <header>
      <div className="nav-grid body-content">
        <div className="nav-grid-item">
          <img className='logo' src={logo} alt=""/>
        </div>

        <div className="nav-grid-item nav">
          <div className="menu">
            {menuicon === 'opened' ? <Menu /> : <Menu visibility="hide" />}
          </div>
          <Hamburger onToggle={toggled => {
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
