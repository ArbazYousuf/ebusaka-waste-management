import * as ActionTypes from '../types';

const initialState = {
  isLoading: false,
  user: null,
  messageLoader: '',
  error: '',
  isPayment: null,
  isFacebookLogin: false,
  packages: [],
};

const Auth = (state = initialState, action) => {
  if (action === undefined) return state;

  switch (action.type) {
    case ActionTypes.SIGNUP:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
        error: '',
      };
    case ActionTypes.SIGNUP_UNSUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case ActionTypes.SIGNUP_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case ActionTypes.LOGIN:
      return {
        ...state,
        isLoading: true,
        error: '',
        isFacebookLogin: false,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
        error: '',
        isFacebookLogin: false,
      };
    case ActionTypes.LOGIN_UNSUCCESS:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        isFacebookLogin: action.isFacebookLogin,
      };
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        isLoading: true,
        messageLoader: 'Updating...',
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: {...state.user, user: action.user},
        // user: {...state.user.user, ...action.user},
        isLoading: false,
        messageLoader: '',
      };
    case ActionTypes.UPDATE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        messageLoader: '',
      };

    case ActionTypes.CLEAR_ERROR:
      return {
        ...state,
        messageLoader: '',
        error: '',
      };

    case ActionTypes.MAKE_SUBSCRIPTION:
      console.log('auth subss');
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.MAKE_SUBSCRIPTION_SUCCESS:
      console.log('auth subss');
      return {
        ...state,
        isLoading: false,
        isPayment: true,
        user: {...state.user, user: {...state.user.user, isPaid: true}},
      };
    case ActionTypes.MAKE_SUBSCRIPTION_FAIL:
      return {
        ...state,
        isPayment: false,
        isLoading: false,
      };

    case ActionTypes.GET_PACKAGES:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.GET_PACKAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        packages: action.packages,
      };
    case ActionTypes.GET_PACKAGES_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.UPDATE_USER_PAYMENT:
      return {
        ...state.error,
        user: {...state.user, user: {...state.user.user, isPaid: true}},
      };

    case ActionTypes.LOGOUT:
      return {
        state: undefined,
      };

    case ActionTypes.PAYPAL_SUCCESS:
      return {
        ...state,
        user: {...state.user, user: {...state.user.user, isPaid: true}},
      };

    default:
      return state;
  }
};

export default Auth;
