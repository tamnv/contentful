import React from 'react';
import { render } from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './container/App';
import { BrowserRouter, Route } from 'react-router-dom'
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import Home from './components/Home';

const store = configureStore();

render(
  <Provider store={store}>
    {/* <App />
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="blog" component={Blogs}/>
      </Route>
    </Router> */}
    <BrowserRouter>
      <div>
        <App>
          
        </App>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
