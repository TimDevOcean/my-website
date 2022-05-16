import React from 'react';
import { Link } from 'react-router-dom';
import FLink from './link';

export default function Menu(props) {

  return (
    <div className={`menu ${props.visibility}`}>
      <div className="nav-menu">
        <FLink href="/">Portfolio</FLink>
        <FLink href="/contact">Contact</FLink>
        <FLink href="/category/insights">Insights</FLink>
      </div>
    </div>
  )
}
