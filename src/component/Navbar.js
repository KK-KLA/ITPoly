import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
      <div className="container-fluid">

        {/* Toggle Button สำหรับ mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#H">หน้าหลัก</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#A">เกี่ยวกับเรา</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#D">หลักสูตร</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#C">ติดต่อเรา</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
