import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Dashboard from './todos/Dashboard';
import store from '../store'; // added
import Header from './layout/Header';
import history from '../history'; // added
import TodoDelete from './todos/TodoDelete'; // added
import TodoEdit from './todos/TodoEdit' // added

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={TodoDelete} />
            <Route exact path='/edit/:id' component={TodoEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

{/* here switch helps in rendering only one component from the following */}
{/* <Provider /> makes the Redux store available to any nested
components that have been wrapped in the connect() function.*/}

ReactDOM.render(<App />, document.querySelector('#app'));
