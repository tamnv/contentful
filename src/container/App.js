import React, { Component } from 'react';
import Blogs from '../components/Blogs';
import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="container">
          <Blogs />
        </div>
      </div>
    )
  }
}