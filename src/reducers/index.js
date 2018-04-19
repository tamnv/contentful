import { combineReducers } from 'redux';
import {blogs, blog} from './blogReducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  blogs,
  blog,
  routing: routerReducer
})

export default rootReducer;