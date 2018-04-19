import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

class Blogs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadBlogs();
  }
  renderBlogs() {
    let blogs = this.props.blogs;
    console.log(blogs);
    let items = blogs.map((item) => {
      return(
        <article key={item.sys.id} className="card col-4" style={{ width: '18rem' }}>
          <img className="card-img-top" src={item.fields.image.fields.file.url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{ item.fields.title }</h5>
            <p className="card-text">{ item.fields.body }</p>
            <Link to={"/blog/" + item.sys.id}>Read more</Link>
          </div>
        </article>
      )
    });
    return items;
  }  
  render(){
    return (
      <div className="blogs">
      <h2>Blogs</h2>
      <div className="row">
        { this.renderBlogs() }
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  blogs: state.blogs
});

function mapDispatchToProps(dispatch) {
  return {
    loadBlogs: function() {
      return dispatch({type: 'FETCH_INIT'});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);