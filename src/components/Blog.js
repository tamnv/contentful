import React, { Component } from 'react'
import {connect} from 'react-redux';

class Blog extends Component {
  componentDidMount() {
    const id = this.props.match.params;
    this.props.loadBlog(id);
  }
  render(){
    const blog = this.props.blog;
    const title = !!blog.fields ? blog.fields.title : 'Loading';
    const body = !!blog.fields ? blog.fields.body : 'Loading';
    return (
      <article>
        <h3 className="article__title">{title}</h3>
        <div className="article__body">{body}</div>
      </article>
    )
  }
}

const mapStateToProps = (state) => ({
  blog: state.blog
});

function mapDispatchToProps(dispatch) {
  return {
    loadBlog: function(id) {
      return dispatch({
        type: 'FETCH_BLOG',
        id
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
