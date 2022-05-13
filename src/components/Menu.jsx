import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {

  // const [menuItem, setMenuItem] = useState("Portfolio")

  // function handleMenuClick(event) {
  //   setMenuItem(event.target.name);
  //   console.log(menuItem);
  // }

  return (
    <div className={`menu ${props.visibility}`}>
        <Link to="/">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/nothingfound">Insights</Link>
    </div>
  )
}
