import React from 'react'


export default function ProjectCard(props) {
  return (
    <div className='project-card'>
        <img alt="" src={props.imgURL}></img>
        <div className='pc-content'>
            <h3>{props.title}</h3>
            <p>{props.excerpt}</p>
            <button href={props.btn}>Discover More <i className="zmdi zmdi-trending-flat animated infinite wobble"></i></button>
        </div>
    </div>
  )
}
