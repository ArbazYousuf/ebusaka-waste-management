import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import Auth from './Auth';
import AsyncStorage from '@react-native-community/async-storage';

// const videoPersistConfig = {
//   key: 'Video',
//   storage: AsyncStorage,
//   blacklist: ['currentVideos'],
// };

const authPersistConfig = {
  key: 'Auth',
  storage: AsyncStorage,
  blacklist: ['error', 'isLoading'],
  keyPrefix: '',
};

// const videoPersistConfig = {
//   key: 'Video',
//   storage: AsyncStorage,
//   blacklist: ['error', 'isLoading'],
//   keyPrefix: '',
// };

// const kidPersistConfig = {
//   key: 'Kid',
//   storage: AsyncStorage,
//   blacklist: ['error', 'isLoading'],
//   keyPrefix: '',
// };

// const wordsPersistConfig = {
//   key: 'Words',
//   storage: AsyncStorage,
//   blacklist: ['error', 'isLoading'],
//   keyPrefix: '',
// };
const Reducers = combineReducers({
  Auth: persistReducer(authPersistConfig, Auth),
});

const reducers = (state, action) => {
  console.warn(action.type);
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return Reducers(state, action);
};
export default reducers;
