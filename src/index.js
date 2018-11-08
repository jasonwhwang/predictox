import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './reducers/store';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

import App from './views/App';
import * as serviceWorker from './serviceWorker';

// const { store, persistor } = configureStore();
const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={<div className="signal"></div>} persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
