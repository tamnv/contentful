import { call, put } from 'redux-saga/effects';
import {fetchBlogs} from '../api/api.js';

export function* loadBlogs() {
  try {
    const items = yield call(fetchBlogs)
    yield put({type: 'FETCH_BLOGS', blogs: items});
  }
  catch(error) {
    yield put({type: 'FETCH_FAILED', error});
  }
}

// export function* loadBlog() {
//   try {
//     const blog = yield call(fetchBlog)
//     yield put({type: 'FETCH_BLOGS', payload: blog});
//   }
//   catch(error) {
//     yield put({type: 'FETCH_FAILED', error});
//   }
// }