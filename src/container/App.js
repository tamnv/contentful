import React, { Component } from 'react';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from '../routes/Routes';
export default class App extends Component {
  render() {
    return (
      <div className="abc">
          <Header />
          <Routers />
      </div>
    )
  }
}