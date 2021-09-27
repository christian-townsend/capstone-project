import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar-component"
import Account from "./components/account-component"
import Landing from "./components/landing-component"
import Teams from "./components/teams-component"


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <br/>
      <Route path="/account" component={Account} />
      <Route path="/teams" component={Teams} />
      <Route path="/landing" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
