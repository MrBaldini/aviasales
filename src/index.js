import thunk from 'redux-thunk';
import { createRoot } from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducer';
import App from './components/app';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  // Включить для разработки
  // compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  compose(applyMiddleware(thunk))
);
/* eslint-enable */

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
