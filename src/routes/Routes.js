import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Blog from '../components/Blog';
import Blogs from '../components/Blogs';
import Home from '../components/Home';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Home} />
        <Route path="/blogs" component={Blogs}/>
        <Route path="/blog/:id" component={Blog} />
      </div>
    );
  }
}

export default Routes;