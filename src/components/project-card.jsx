import React from 'react'
import { Link } from 'react-router-dom';


export default function ProjectCard(props) {
  return (
    <div className='project-card'>
        <img alt="" src={props.imgURL}></img>
        <div className='pc-content'>
            <h3>{props.title}</h3>
            <p>{props.excerpt}</p>
            <Link target={props.target} to={props.btn}>{props.btnText} <i className="zmdi zmdi-trending-flat animated infinite wobble"></i></Link>
        </div>
    </div>
  )
}