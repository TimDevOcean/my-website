import React from 'react'

export default function IntroTxt(props) {
  return (
    <div className="intro-txt">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
    </div>
  )
}
