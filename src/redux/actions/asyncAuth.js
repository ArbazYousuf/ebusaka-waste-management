import {createAsyncThunk} from '@reduxjs/toolkit';
import {Toast} from 'native-base';
import {login, reg} from '../../services/api-call';
import ToastError from '../../utils/toastErr';

export const AsyncLogin = createAsyncThunk(
  'auth/login',
  async (params, ThunkApi) => {
    console.warn('params', params);

    const isLogin = (resolve, reject) => {
      login('/user/login', params)
        .then(({data}) => {
          console.warn('valueee', data);
          if (data?.success) {
            resolve(data);
          } else {
            ToastError(data?.message);
            throw Error(data?.message);
          }
        })
        .catch((error) => {
          console.warn('async thunkkk cath', error);
          reject(error);
        });
    };

    return new Promise(isLogin); /// idhr se promise h return hona chaiyaa hamesha
  },
);

export const AsyncRegister = createAsyncThunk(
  'auth/signup',
  async (params, ThunkApi) => {
    console.warn('params', params);

    const IsRegister = (resolve, reject) => {
      reg('/user/signup', params)
        .then(({data}) => {
          console.warn('valueee', data);
          if (data?.success) {
            resolve(data);
          } else {
            ToastError(data?.message);
            throw Error(data?.message);
          }
        })
        .catch((error) => {
          console.warn('async thunkkk cath', error);
          reject(error);
        });
    };

    return new Promise(IsRegister); /// idhr se promise h return hona chaiyaa hamesha
  },
);
