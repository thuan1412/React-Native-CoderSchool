import * as React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {todos} from './redux/todo';

import HomePage from './screens/HomePage/';
const store = createStore(todos);

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
