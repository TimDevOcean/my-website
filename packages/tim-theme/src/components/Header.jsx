import React, { useState } from "react";
import logo from "../img/logo.png";
import { Slant as Hamburger } from 'hamburger-react';
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import FLink from './link';

export default function Header() {

  const [menuicon, setMenuIcon] = useState('closed');

  function handleMenuIcon(menuIconState) {
    setMenuIcon(menuIconState);
  }

  return (
    <header>
      <div className="header-content">
        <div className="grid-2-item">
          <FLink href="/"><span className='logo'>Timothy Agozie</span></FLink>
        </div>

        <div className="nav-menu grid-2-item">
          <div className="menu">
            {menuicon === 'opened' ? <Menu /> : <Menu visibility="hide" />}
          </div>
          <Hamburger size={40} onToggle={toggled => {
              if (toggled) {
                handleMenuIcon('opened');
              } else {
                handleMenuIcon('closed');
              }
            }
            } />
        </div>
      </div>
      <div className="divider"></div>
    </header>
  )
}
