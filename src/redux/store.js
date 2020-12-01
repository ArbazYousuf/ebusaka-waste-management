import {createStore, applyMiddleware} from 'redux';

import middlewares from './middleware';
import rootReducers from './reducers';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['Auth','Video','Kid','Words'], // uncomment this line if you want to use persist for navigation
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {store, persistor};
