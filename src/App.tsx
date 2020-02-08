import React from 'react';
import {Provider} from 'react-redux';

import store from './store/storeConfig';
import Route from './routes/route';

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
