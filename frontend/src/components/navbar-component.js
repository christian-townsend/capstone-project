import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
          <div className="container-fluid">
              <a><Link to='/landing'><img className="capstone-logo" src="/images/capstone-logo.svg" alt="capstone logo"></img></Link></a>     
                <ul className="navbar-nav me-auto">  
                  <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Past Projects</a>
                  </li> 
                </ul>
            </div>
      </nav>
    );
  }
}