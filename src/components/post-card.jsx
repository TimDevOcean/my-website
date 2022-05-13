import React from 'react'


export default function PostCard(props) {
  return (
    <div className='project-card'>
        <img alt="" src={props.imgURL}></img>
        <div className='pc-content'>
            <h3>{props.title}</h3>
            <p>{props.excerpt}</p>
            <a target="_blank" href={props.btn} rel="noopener noreferrer">{props.btnText} <i className="zmdi zmdi-trending-flat animated infinite wobble"></i></a>
        </div>
    </div>
  )
}
