import React from 'react'

export default function Menu(props) {
  return (
    <div className={`menu ${props.visibility}`}>
        <a href="/">Portfolio</a>
        <a href="/">Insights</a>
        <a href="/">Contact</a>
    </div>
  )
}
