import React from 'react'



export default function Canvas() {
  return (
    <div id="anim" className="header-anim">
        <div className="content">
            <canvas></canvas>
        </div>
        <script src="./meffect.js"></script>
    </div>
  )
}