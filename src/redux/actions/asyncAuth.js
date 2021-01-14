import {createAsyncThunk} from '@reduxjs/toolkit';
import {login} from '../../services/api-call';

export const Login = createAsyncThunk(
  'auth/login',
  async (params, ThunkApi) => {
    console.log('params', params);

    const isLogin = (resolve, reject) => {
      login('user/login')
        .then((val) => {
          resolve(val);
        })
        .catch((error) => {
          reject(error);
        });
    };

    return new Promise(isLogin); /// idhr se promise h return hona chaiyaa hamesha
  },
);
