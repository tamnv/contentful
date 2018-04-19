import { call, put } from 'redux-saga/effects';
import {fetchBlogs, fetchBlog} from '../api/api.js';

export function* loadBlogs() {
  try {
    const items = yield call(fetchBlogs)
    yield put({type: 'FETCH_BLOGS', blogs: items});
  }
  catch(error) {
    yield put({type: 'FETCH_FAILED', error});
  }
}

export function* loadBlog(action) {
  try {
    const item = yield call(fetchBlog, action.id)
    yield put({type: 'FETCH_BLOG_SUCCESS', blog: item});
  }
  catch(error) {
    yield put({type: 'FETCH_FAILED', error});
  }
}