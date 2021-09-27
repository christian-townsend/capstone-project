import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar-component"
import Dashboard from "./components/dashboard-component"
import Landing from "./components/landing-component"
import Login from "./components/login-component"


function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
              <Route path="/login" component={Login} />
        <div>
            <Navbar />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/landing" component={Landing} />
        </div>
          </Switch>
        </Router>
      </div>
    );  
  }
export default App;