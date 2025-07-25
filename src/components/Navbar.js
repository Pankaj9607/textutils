import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar({title = "Set title here", about = "About", mode, toggleMode, modeText}) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{about}</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input" onClick={toggleMode}  type="checkbox" role="switch" id="switchCheckDefault"/>
                  <label className="form-check-label" htmlFor="switchCheckDefault">{modeText}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
