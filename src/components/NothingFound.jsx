import React from 'react'

export default function NothingFound() {
  return (
    <div className='body-content' style={{minHeight: "400px"}}>
        <div style={{textAlign: "center", paddingTop: "100px", opacity: "0.2"}}><i class="zmdi zmdi-help-outline zmdi-hc-5x"></i></div>
        <div style={{textAlign: "center"}}><p>Nothing found at the moment, please come back later.</p></div>
    </div>
  )
}
