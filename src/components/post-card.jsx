import React from 'react'


export default function PostCard(props) {
  return (
    <a className='img-link' target="_blank" rel="noopener noreferrer" href={props.pURL}>
    <div className='project-card'>
        <img alt="" src={props.imgURL}></img>
        <div className='pc-content'>
            <h3>{props.title}</h3>
            <p>{props.excerpt}</p>
            <button target="_blank" href={props.btn} rel="noopener noreferrer">{props.btnText} <i className="zmdi zmdi-trending-flat animated infinite wobble"></i></button>
        </div>
    </div>
    </a>
  )
}
