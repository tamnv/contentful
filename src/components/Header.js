import React, { Component } from 'react';
import logo from '../contentful-dark.svg';
import '../App.css';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <Menu />
        </div>
      </div>
    )
  }
}

export default Header;