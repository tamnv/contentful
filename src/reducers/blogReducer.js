export const blogs = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return [];
    case 'FETCH_BLOGS':
      return action.blogs;
    default:
      return state;
  }
}

export const blog = (state = [], action)  => {
  switch(action.type) {
    case 'FETCH_BLOG_SUCCESS' :
        return action.blog;
        
    default :
      return state;
  }
};
