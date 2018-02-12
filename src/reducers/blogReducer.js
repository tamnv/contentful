const blogs = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return [];
    case 'FETCH_BLOGS':
      return action.blogs;
    default:
      return state;
  }
}

export default blogs;