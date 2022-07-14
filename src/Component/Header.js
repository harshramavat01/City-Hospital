import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const Header = () => {
  return (
    <>
      <div className="main-header">
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" /> <NavLink to="mailto:contact@example.com">cityhospital@example.com</NavLink>
              <i className="bi bi-phone" /> +91 9988776655
            </div>
            <div className="d-none d-lg-flex social-links align-items-center">
              <NavLink to="/twitter" className="twitter"><i className="bi bi-twitter" /></NavLink>
              <NavLink to="/facebook" className="facebook"><i className="bi bi-facebook" /></NavLink>
              <NavLink to="/instagram" className="instagram"><i className="bi bi-instagram" /></NavLink>
              <NavLink to="/linkedin" className="linkedin"><i className="bi bi-linkedin" /></NavLink>
            </div>
          </div>
        </div>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <div className="logo">
              <NavLink to="/">
                <h1 className="logo me-auto">City</h1><br />
                <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
              </NavLink>
            </div>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <NavLink className="nav-link scrollto" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link scrollto" to={'/department'}>Departments</NavLink></li>
                <li>
                  <NavLink className="nav-link scrollto" to={'/doctors'}>Doctors</NavLink></li>
                <li>
                  <NavLink className="nav-link scrollto" to={'/about'}>About</NavLink></li>
                <li>
                  <NavLink className="nav-link scrollto" to={'/contact'}>Contact</NavLink></li>
                  <li>
                  <NavLink className="nav-link scrollto" to={'/medicine'}>Medicine</NavLink></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            <NavLink className="appointment-btn scrollto" to={'/book_apt'}><span className="d-none d-md-inline">Make an</span>
              Appointment</NavLink>
            <NavLink className="appointment-btn scrollto" to={'/login'}><span className="d-none d-md-inline">Login/ Signup</span></NavLink>
          </div>
        </header>
      </div>


    </>
  )
}

export default Header
