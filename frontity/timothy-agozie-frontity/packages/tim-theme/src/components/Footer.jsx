import React from "react";

let year = new Date().getFullYear();

export default function Footer() {
    return (
      <footer>
      <div className="divider"></div>
        <div className="header-content">
          <div className="grid-2-item">
            <span>© {year} Timothy Agozie</span>
          </div>
          <div className="nav-menu grid-2-item">
            <span>..with love from <span aria-label="Ghana flag" role="img">🇬🇭</span></span>
          </div>
        </div>
      </footer>
    )
  }