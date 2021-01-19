import {createSlice} from '@reduxjs/toolkit';
import {
  AsyncGetCompanies,
  AsyncPostSp,
  AsyncPostSub,
} from '../actions/asyncJob';

export const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    companies: null,
    isLoading: false,
    error: null,
    mysubscription: [],
    // justPostNow: [],
    message: '',
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
    // <-------get companies----------------->

    [AsyncGetCompanies.pending]: (state, action) => {
      console.log('pending', action.payload);
      state.isLoading = true;
      state.error = '';
    },
    [AsyncGetCompanies.fulfilled]: (state, action) => {
      console.log('fullfilled', action.payload);

      state.isLoading = false;
      state.companies = action.payload.company;
      state.error = '';
    },
    [AsyncGetCompanies.rejected]: (state, action) => {
      console.log('rejected-------slice', action);
      state.isLoading = false;
      state.companies = null;
      state.error = action.payload;
    },
    // <-------post subscription----------------->

    [AsyncPostSub.pending]: (state, action) => {
      console.log('pending', action.payload);
      state.isLoading = true;
      state.error = '';
    },
    [AsyncPostSub.fulfilled]: (state, action) => {
      console.log('fullfilled', action.payload);

      state.isLoading = false;
      state.message = action.payload;
      state.error = '';
    },
    [AsyncPostSub.rejected]: (state, action) => {
      console.log('rejected-------slice', action);
      state.isLoading = false;
      state.error = action.payload;
    },

    // <-------post special job----------------->

    [AsyncPostSp.pending]: (state, action) => {
      console.log('pending', action.payload);
      state.isLoading = true;
      state.error = '';
    },
    [AsyncPostSp.fulfilled]: (state, action) => {
      console.log('fullfilled', action.payload);

      state.isLoading = false;
      state.message = action.payload;
      state.error = '';
    },
    [AsyncPostSp.rejected]: (state, action) => {
      console.log('rejected-------slice', action);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  increment,
  // decrement,
  // incrementByAmount,
  // incrementByAmount2,
  // startAsync,
} = jobSlice.actions;

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

export default jobSlice.reducer;

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
