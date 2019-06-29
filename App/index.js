import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Movies from './components/movies';

export default function App() {
  return (
    <Provider store={store}>
      <Movies />
    </Provider>
  );
}
