import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


import Header from './components/header';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/resources" component={Resources} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
