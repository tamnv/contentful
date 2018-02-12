import React, { Component } from 'react'

class Blog extends Component {
  render(){
    return (
      <article>
        <h3 className="article__title"> This is blog detail </h3>
        <div className="article__body">This is description</div>
      </article>
    )
  }
}

export default Blog;