import {createSlice} from '@reduxjs/toolkit';
import {AsyncLogin, AsyncRegister} from '../actions/asyncAuth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    // increment: (state) => {
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
    [AsyncLogin.pending]: (state, action) => {
      console.log('pending', action.payload);
      state.isLoading = true;
    },
    [AsyncLogin.fulfilled]: (state, action) => {
      console.log('fullfilled', action.payload);

      state.isLoading = false;
      state.user = action.payload;
    },
    [AsyncLogin.rejected]: (state, action) => {
      console.log('rejected', action.error.message);
      state.isLoading = false;
      state.user = null;
      state.error = action.error.message;
    },

    [AsyncRegister.pending]: (state, action) => {
      console.log('pending', action.payload);
      state.isLoading = true;
    },
    [AsyncRegister.fulfilled]: (state, action) => {
      console.log('fullfilled', action.payload);

      state.isLoading = false;
      state.user = action.payload;
    },
    [AsyncRegister.rejected]: (state, action) => {
      console.log('rejected', action.error.message);
      state.isLoading = false;
      state.user = null;
      state.error = action.error.message;
    },
  },
});

export const {
  // increment,
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
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
