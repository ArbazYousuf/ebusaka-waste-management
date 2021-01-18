import {combineReducers} from 'redux';
import authReducer from './auth';

const reducers = combineReducers({
  Auth: authReducer,
});

export default reducers;
