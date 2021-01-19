import {combineReducers} from 'redux';
import authReducer from './auth';
import jobReducer from '../slices/jobs';

const reducers = combineReducers({
  Auth: authReducer,
  Jobs: jobReducer,
});

export default reducers;
