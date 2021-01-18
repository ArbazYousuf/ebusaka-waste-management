import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import {logger} from 'redux-logger';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './slices';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // devTools: true,
  // middleware: getDefaultMiddleware({
  //    logger,
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
  middleware: [logger, thunk],
});

export default store;
