import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, login, post, put, reg, verifyMe} from '../../services/api-call';
import ToastError from '../../utils/toastErr';

export const AsyncGetCompanies = createAsyncThunk(
  'jobs/getCompanies',
  async (params, ThunkApi) => {
    console.warn('params', params);
    let state = ThunkApi.getState();
    let token = state.Auth.token;
    console.warn('token', state.Auth.token);
    // let {phone, nav} = params;

    try {
      const res = await get('/company/getAll', token);
      if (res.data?.success) {
        // console.log('res', res.data);
        // nav.navigate('OTP');
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

export const AsyncGetMySpecial = createAsyncThunk(
  'jobs/mySpecial',
  async (params, ThunkApi) => {
    console.warn('params', params);
    let state = ThunkApi.getState();
    let token = state.Auth.token;
    let id = state.Auth.user?._id;
    console.warn('token', state.Auth.token);
    // let {phone, nav} = params;

    try {
      const res = await get(`/specialJob/me/${id}`, token);
      if (res.data?.success) {
        // console.log('res', res.data);
        // nav.navigate('OTP');
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

export const AsyncPostSub = createAsyncThunk(
  'jobs/postSub',
  async (params, ThunkApi) => {
    let {data, nav, token} = params;
    console.warn('params', params);

    try {
      const res = await post('/subsjob', data, token);
      if (res.data?.success) {
        console.log('res', res.data);
        // nav.navigate('OTP');
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

export const AsyncPostSp = createAsyncThunk(
  'jobs/postSp',
  async (params, ThunkApi) => {
    let {data, nav, token} = params;
    console.warn('params', params);

    try {
      const res = await post('/specialJob', data, token);
      if (res.data?.success) {
        console.log('res', res.data);
        // nav.navigate('OTP');
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

// export const AsyncVerifyOtp = createAsyncThunk(
//   'auth/verifyMe',
//   async (params, ThunkApi) => {
//     let {token, nav} = params;
//     console.warn('params', params);

//     try {
//       const res = await verifyMe('/user/verifyMe', token);
//       if (res.data?.success) {
//         console.log('res', res.data);
//         nav.navigate('Home');
//         return await res.data;
//       } else {
//         ToastError(res.data?.message);
//         // console.log('res', res);
//         throw Error(res.data?.message);
//       }
//     } catch (error) {
//       return ThunkApi.rejectWithValue(error.message);
//     }
//   },
// );

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
