import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { register } from './registerServiceWorker';
import { configureStore } from './store/configureStore';

import './index.scss';
import './constants/icons.scss';

const store = configureStore({ streams: [], liveStreams: [], loading: false, error: false});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
register();
