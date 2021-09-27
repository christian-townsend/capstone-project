import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar-component"
import Dashboard from "./components/dashboard-component"
import Landing from "./components/landing-component"
import Login from "./components/login-component"


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
          <br/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/landing" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
