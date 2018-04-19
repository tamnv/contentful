import {fork, takeLatest} from 'redux-saga/effects';
import {loadBlogs, loadBlog} from './loadBlog';

function* rootSaga() {
  yield[
    fork(loadBlogs),
    takeLatest('FETCH_BLOG', loadBlog),
  ];
}

export default rootSaga;