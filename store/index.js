import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import location from './location';
import tasksCompleted from './tasksCompleted';
import buttons from './buttons';

const reducer = combineReducers({ location, tasksCompleted, buttons });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
  //createLogger({ collapsed: true })
);
const store = createStore(reducer, middleware);

export default store;
