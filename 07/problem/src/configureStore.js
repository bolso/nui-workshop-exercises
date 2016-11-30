import {createStore, applyMiddleware, compose} from 'redux';
import DevTools from './components/DevTools';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';


const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

export default function configureStore(initialState) {
  let middlewares = [thunk];

  const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares, loggerMiddleware),
    DevTools.instrument()
  )(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
}
