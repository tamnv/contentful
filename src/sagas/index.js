import {fork, takeLatest} from 'redux-saga/effects';
import {loadBlogs, loadBlog} from './loadBlog';

function* rootSaga() {
  yield[
    takeLatest('FETCH_INIT', loadBlogs),
    takeLatest('FETCH_BLOG', loadBlog),
  ];
}

export default rootSaga;