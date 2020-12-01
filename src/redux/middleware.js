import {createLogger} from 'redux-logger';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

middlewares.push(logger);
middlewares.push(thunk);

export default middlewares;
