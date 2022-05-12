import React from "react";

let year = new Date().getFullYear();

export default function Footer() {
    return (
      <footer>
        <div className="nav-grid body-content">
          <div className="nav-grid-item">
            <span className="f-txt">© {year} Timothy Agozie</span>
          </div>
          <div className="">
            <span className="f-txt love" style={{float: "right"}}>..with love from 🇬🇭</span>
          </div>
        </div>
      </footer>
    )
  }