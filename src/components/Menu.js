import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Blogs from './Blogs';
import Blog from './Blog';


export default class Menu extends Component {
  render() {
    return (
      <Router>
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
          </ul>
        </div>
      </Router>
    )
  }
}