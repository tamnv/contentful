import {fork} from 'redux-saga/effects';
import {loadBlogs} from './loadBlog';

function* rootSaga() {
  yield[
    fork(loadBlogs),
  ];
}

export default rootSaga;