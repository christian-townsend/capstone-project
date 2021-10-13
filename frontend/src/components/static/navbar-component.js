import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  onLogin(e) {
    e.preventDefault();

    axios
      .request("http://localhost:5000/users")
      .then((res) => console.log(res.data));

    window.location = "http://localhost:5000/users";
  }

  /* checkLogin {
    if (res.cookie.jwt != NULL) {
      this.state.loggedIn: true
    }
  } */

  render() {
    return (
      <div className="container-fluid Navbar">
        <navBarSample />
        <nav className="navbar fixed-top navbar-dark navbar-expand-sm col-sm-12 col-md-12">
          {/*Logo*/}
          <Link to="/home">
            <img
              style={{ marginLeft: -100, marginRight: 60 }}
              className="capstone-logo"
              src="../capstone-logo.svg"
              alt="capstone logo"
            ></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-target="#collapseNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="nav-header-left col-xs-12 col-md-6">
              {/*Navbar Menu Left Hand Side*/}
              <ul class="nav navbar-nav me-auto">
                <li>
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <br></br>
                <li>
                  <a class="nav-link" href="/sponsor">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="/pastprojects">
                    Past Projects
                  </a>
                </li>
              </ul>
            </div>
            <div
              style={{ marginRight: -300 }}
              className="nav-header-right col-xs-12 col-md-6"
            >
              {/*Navbar Menu Right Hand Side*/}
              <ul class="nav navbar-nav ms-auto">
                <li>
                  <a class="nav-link" onClick={(e) => this.onLogin(e)}>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

{
  /*}
              {/*Logo*
              <div class="row">
                <div className="nav-header-logo col-xs-12 col-md-2">
                    <Link to="/home">
                        <img className="capstone-logo" src="../capstone-logo.svg" alt="capstone logo"></img>
                    </Link>
                </div>
              </div>
              <div className="nav-header-left col-xs-12 col-md-6">
                  {/*Navbar Menu Left Hand Side*
                  <ul class="nav navbar-nav me-auto">
                    <li><a class="nav-link" href="/about">About</a></li><br></br>
                    <li><a class="nav-link" href="/sponsors">Sponsors</a></li>
                    <li><a class="nav-link" href="/pastprojects">Past Projects</a></li>
                  </ul>
              </div>
              <div className="nav-header-right col-xs-12 col-md-6">
                  {/*Navbar Menu Right Hand Side*
                  <ul class="nav navbar-nav ms-auto">
                    <li><a class="nav-link" href="/login">Login</a></li>
                  </ul>
                  </div>*/
}
