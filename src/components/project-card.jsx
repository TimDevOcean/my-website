import React from 'react'
// import { Link } from 'react-router-dom';


export default function ProjectCard(props) {
  return (
    <a className='img-link' href={props.pURL}><div className='project-card'>
        <img alt="" src={props.imgURL}></img>
        <div className='pc-content'>
            <h3>{props.title}</h3>
            <p>{props.excerpt}</p>
            <button target={props.target} href={props.btn}>{props.btnText} <i className="zmdi zmdi-trending-flat animated infinite wobble"></i></button>
        </div>
    </div></a>
  )
}
