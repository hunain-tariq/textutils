import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"> {props.title} </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="True" href="/">Disabled</a>
          </li>
          
               
          <div className={'form-check form-switch text-light'}>
             <input className="form-check-input mx-2" onClick={props.greenbtn}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
             <label className="form-check-label text-light"   htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
          </div>

        </ul>
      </div>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
    <div className={'form-check form-switch text-light'}>
  <input className="form-check-input mx-2" onClick={props.tooglebtn} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label text-light"   htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
  </div>
    </div>
  </nav >
  )
}

Navbar.propTypes = {title: PropTypes.string}