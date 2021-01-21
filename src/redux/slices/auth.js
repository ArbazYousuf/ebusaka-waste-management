import {createSlice} from '@reduxjs/toolkit';
import {
  AsyncLogin,
  AsyncRegister,
  AsyncUserUpdate,
  AsyncVerifyOtp,
} from '../actions/asyncAuth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: null,
    isLoading: false,
    error: null,
    isLogin: false,
  },
  reducers: {
    // increment: (state) => {
    //   console.warn('state-slice', state);
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    // incrementByAmount2: (state, action) => {
    //   state.value += action.payload;
    //   state.isLoading = false;
    // },
    // startAsync: (state, action) => {
    //   state.isLoading = true;
    // },
  },
  extraReducers: {
    // <-------login----------------->

    [AsyncLogin.pending]: (state, action) => {
      console.log('pending', action.payload);
      state.isLoading = true;
    },
    [AsyncLogin.fulfilled]: (state, action) => {
      console.log('fullfilled', action.payload);

      state.isLoading = false;
      state.user = action.payload;
      state.token = action.payload.token;
    },
    [AsyncLogin.rejected]: (state, action) => {
      console.log('rejected-------slice', action);
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    },
    // <-------register----------------->
    [AsyncRegister.pending]: (state, action) => {
      console.log('pending', action.payload);
      state.isLoading = true;
      state.error = '';
    },
    [AsyncRegister.fulfilled]: (state, action) => {
      console.log('fullfilled', action.payload);

      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
      state.token = action.payload.token;
    },
    [AsyncRegister.rejected]: (state, action) => {
      console.log('rejected slice', action);
      state.isLoading = false;
      state.user = null;
      state.error = action.error.message;
    },

    // <-------verify me----------------->

    [AsyncVerifyOtp.pending]: (state, action) => {
      console.log('pending', action.payload);
      state.isLoading = true;
      state.error = '';
    },
    [AsyncVerifyOtp.fulfilled]: (state, action) => {
      console.log('fullfilled', action.payload);

      state.isLoading = false;
      state.error = '';
      state.user = action.payload.user;
      state.isLogin = true;
    },
    [AsyncVerifyOtp.rejected]: (state, action) => {
      console.log('rejected slice', action);
      state.isLoading = false;
      // state.user = null;
      state.error = action.error.message;
    },

    // <-------update me----------------->

    [AsyncUserUpdate.pending]: (state, action) => {
      console.log('pending', action.payload);
      state.isLoading = true;
      state.error = '';
    },
    [AsyncUserUpdate.fulfilled]: (state, action) => {
      console.log('fullfilled', action.payload);

      state.isLoading = false;
      state.error = '';
      state.user = action.payload.user;
      state.isLogin = true;
    },
    [AsyncUserUpdate.rejected]: (state, action) => {
      console.log('rejected slice', action);
      state.isLoading = false;
      // state.user = null;
      state.error = action.error.message;
    },
  },
});

export const {
  increment,
  // decrement,
  // incrementByAmount,
  // incrementByAmount2,
  // startAsync,
} = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  dispatch(startAsync());
  setTimeout(() => {
    dispatch(incrementByAmount2(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectAuth = (state) => state.auth;
// console.log('authSlice.reducer', authSlice.reducer);

export default authSlice.reducer;

//  const { usersSuccess } = slice.actions

//  export const fetchUsers = () => async dispatch => {
//     try {
//         await api.get('/users')
//             .then((response) => dispatch(usersSuccess(response.data)))
//     }
//     catch (e) {
//         return console.error(e.message);
//     }
// }
