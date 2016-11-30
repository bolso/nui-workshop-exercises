// import createStore, applyMiddleware, compose from redux
import {createStore, applyMiddleware, compose} from 'redux';
// import DevTools from contailers/DevTools
import DevTools from './components/DevTools';

//import thunk from redux-thunk
import thunk from 'redux-thunk';

//import createLogger from 'redux-logger'
import createLogger from 'redux-logger';

// import rootReducer from ./reducers
import rootReducer from './reducers';


// create logggerMiddleware
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

//export configureStore function that acceps initalState
export default function configureStore(initialState) {
  let middlewares = [thunk];

  // use compose to createStoreWithMiddleware
  const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares, loggerMiddleware),
    DevTools.instrument()
  )(createStore);

  //return createStoreWithMiddleware
  return createStoreWithMiddleware(rootReducer, initialState);
}
