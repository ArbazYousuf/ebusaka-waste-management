import {createAsyncThunk} from '@reduxjs/toolkit';
import {login, put, reg, verifyMe} from '../../services/api-call';
import ToastError from '../../utils/toastErr';

export const AsyncLogin = createAsyncThunk(
  'auth/login',
  async (params, ThunkApi) => {
    console.warn('params', params);
    let {phone, nav} = params;

    try {
      const res = await login('/user/login', {phone});
      if (res.data?.success) {
        // console.log('res', res.data);
        nav.navigate('OTP');
        return await res.data;
      } else {
        ToastError(res.data?.message);
        // console.log('res', res);
        throw Error(res.data?.message);
      }
    } catch (error) {
      // console.log('error', error.message);
      return ThunkApi.rejectWithValue(error?.message);
    }
  },
);

export const AsyncRegister = createAsyncThunk(
  'auth/signup',
  async (params, ThunkApi) => {
    let {data, nav} = params;
    console.warn('params', params);

    try {
      const res = await reg('/user/signup', data);
      if (res.data?.success) {
        console.log('res', res.data);
        nav.navigate('OTP');
        return await res.data;
      } else {
        ToastError(res.data?.message);
        // console.log('res', res);
        throw Error(res.data?.message);
      }
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  },
);

export const AsyncVerifyOtp = createAsyncThunk(
  'auth/verifyMe',
  async (params, ThunkApi) => {
    let {token, nav} = params;
    console.warn('params', params);

    try {
      const res = await verifyMe('/user/verifyMe', token);
      if (res.data?.success) {
        console.log('res', res.data);
        nav.navigate('Home');
        return await res.data;
      } else {
        ToastError(res.data?.message);
        // console.log('res', res);
        throw Error(res.data?.message);
      }
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  },
);

export const AsyncUserUpdate = createAsyncThunk(
  'auth/userUpdate',
  async (params, ThunkApi) => {
    console.warn('params', params);
    let {data, token} = params;
    console.log(token);
    try {
      const res = await put('/user/', data, '', token);
      if (res.data?.success) {
        // console.log('res', res.data);
        return await res.data;
      } else {
        ToastError(res.data?.message);
        // console.log('res', res);
        throw Error(res.data?.message);
      }
    } catch (error) {
      // console.log('error', error.message);
      return ThunkApi.rejectWithValue(error?.message);
    }
  },
);

// export const AsyncRegister = createAsyncThunk(
//   'auth/signup',
//   async (params, ThunkApi) => {
//     console.warn('params', params);

//     const IsRegister = (resolve, reject) => {
//       reg('/user/signup', params)
//         .then(({data}) => {
//           console.warn('valueee', data);
//           if (data?.success) {
//             resolve(data);
//           } else {
//             ToastError(data?.message);
//             throw Error(data?.message);
//           }
//         })
//         .catch((error) => {
//           console.warn('async thunkkk cath', error);
//           reject(error);
//         });
//     };

//     return new Promise(IsRegister); /// idhr se promise h return hona chaiyaa hamesha
//   },
// );
