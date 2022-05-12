import React from 'react'

export default function SocialIcons(props) {
  return (
    <div>
      &nbsp;
      <div className="social-icons">
        <a href={props.ll} target="_blank" rel="noopener noreferrer"><i className="zmdi zmdi-linkedin-box zmdi-hc-lg"></i></a>
        <a href={props.gl} target="_blank" rel="noopener noreferrer"><i className="zmdi zmdi-github zmdi-hc-lg"></i></a>
        <a href={props.il} target="_blank" rel="noopener noreferrer"><i className="zmdi zmdi-instagram zmdi-hc-lg"></i></a>
        <a href={props.tl} target="_blank" rel="noopener noreferrer"><i className="zmdi zmdi-twitter zmdi-hc-lg"></i></a>
        <a href={props.el} target="_blank" rel="noopener noreferrer"><i className="zmdi zmdi-email zmdi-hc-lg"></i></a>
        <a href={props.wl} target="_blank" rel="noopener noreferrer"><i className="zmdi zmdi-whatsapp zmdi-hc-lg"></i></a>
      </div>
    </div>
  )
}
