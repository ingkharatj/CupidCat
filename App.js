import React, { Component } from 'react';
import Main from './navigation/Main'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import reducer from './reducers';

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export class App extends Component {
 
  render() {
  
    return (

      <Provider store={store}>
        <Main />
      </Provider>

    );
  }
}

export default App;


