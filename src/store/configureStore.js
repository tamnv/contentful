import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleWare)));
  sagaMiddleWare.run(rootSaga);
  return store;
}