import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from "./project-component";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid Navbar">
        <nav className="navbar fixed-top navbar-dark navbar-expand-lg col-sm-12 col-md-12">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
              {/*Logo*/}
              <div class="row">
                <div className="nav-header-logo col-xs-12 col-md-2">
                    <Link to="/home">
                        <img className="capstone-logo" src="../capstone-logo.svg" alt="capstone logo"></img>
                    </Link>
                </div>
              </div>
              <div className="nav-header-left col-xs-12 col-md-6">
                  {/*Navbar Menu Left Hand Side*/}
                  <ul class="nav navbar-nav me-auto">
                    <li><a class="nav-link" href="/about">About</a></li><br></br>
                    <li><a class="nav-link" href="/sponsors">Sponsors</a></li>
                    <li><a class="nav-link" href="/pastprojects">Past Projects</a></li>
                  </ul>
              </div>
              <div className="nav-header-right col-xs-12 col-md-6">
                  {/*Navbar Menu Right Hand Side*/}
                  <ul class="nav navbar-nav ms-auto">
                    <li><a class="nav-link" href="/login">Login</a></li>
                  </ul>
              </div>
        </nav>
      </div>
    )
  }
}