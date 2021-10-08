import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from "./project-component";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg col-lg-12">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div className="container">
        
          <ul className="navbar-nav me-auto">
            <li class="nav-item nav-Logo">
              
                <Link to="/landing">
                 <img
                   className="capstone-logo"
                   src="../capstone-logo.svg"
                alt="capstone logo"
              ></img>
            </Link>
       
            </li>
            <li class="nav-item">
              
              <a class="nav-link" href="/about">
                About
              </a>
             
            </li>
            <li class="nav-item">
              
              <a class="nav-link" href="/sponsors">
                Current Sponsors
              </a>
              
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pastprojects">
                Past Projects
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto">
            <li class="nav item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
