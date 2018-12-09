import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nagigation extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Validate XML</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" 
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink exact className="nav-link" to="/" >Home</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/cesarbruschetta/test_validator_scielo">GitHub Backend</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/cesarbruschetta/validator-scielo-frontend">GitHub Frontend</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nagigation; 