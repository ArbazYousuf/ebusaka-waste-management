import * as Actiontypes from '../types';
import {reg, login, get} from '../../services/api-call';
import ToastError from '../../utils/toastErr';
import AsyncStorage from '@react-native-community/async-storage';

export const Register = (param, nav, page) => {
  console.log('actionn', {param}, {nav});

  return (dispatch) => {
    dispatch({
      type: Actiontypes.SIGNUP,
    });

    reg('user/signup', param)
      .then(({data}) => {
        console.log('reg res', data);
        if (data.success) {
          dispatch({
            type: Actiontypes.SIGNUP_SUCCESS,
            user: data,
            // error: '',
          });

          nav.navigate(page, {email: data.user.email});
          dispatch(ClearError());
          return;
        } else {
          ToastError(data.msg);
          dispatch({
            type: Actiontypes.SIGNUP_FAIL,
            error: data.msg,
          });
        }
      })
      .catch((err) => {
        // ToastError(err);
        dispatch({
          type: Actiontypes.SIGNUP_FAIL,
        });
      });
  };
};

export const Signin = (data, nav, page, platform) => {
  console.log({data});
  return (dispatch) => {
    dispatch({
      type: Actiontypes.LOGIN,
    });
    login(`user/${platform ? 'google' : 'login'}`, data)
      .then(({data}) => {
        // console.log(data.user.role)

        if (data.success) {
          dispatch({
            type: Actiontypes.LOGIN_SUCCESS,
            user: data,
          });
          nav.navigate(page, {token: data?.token});
          dispatch(ClearError());
        } else {
          dispatch({
            type: Actiontypes.LOGIN_UNSUCCESS,
            error: data.msg,
          });
        }
      })
      .catch((err) => {
        console.warn(err);
        dispatch({
          type: Actiontypes.LOGIN_UNSUCCESS,
        });
      });
  };
};

export const Update = (token) => {
  return (dispatch) => {
    dispatch({
      type: Actiontypes.UPDATE_USER,
    });
    get(`me`, token)
      .then(({data}) => {
        if (data.success) {
          console.log('ONCHANGE', data);

          dispatch({
            type: Actiontypes.UPDATE_USER_SUCCESS,
            user: data.user,
          });
        } else {
          dispatch({
            type: Actiontypes.UPDATE_USER_FAIL,
          });
        }
      })
      .catch((err) => {
        ToastError('NETWORK ERROR');
        // console.warn('ERROR', err)

        dispatch({
          type: Actiontypes.UPDATE_USER_FAIL,
        });
      });
  };
};

export const Resend = (data, nav) => {
  return (dispatch) => {
    dispatch({
      type: Actiontypes.RESEND,
    });
    reg('user/resend', data).then(({data}) => {
      console.log('res', data);
      if (data.success) {
        dispatch({
          type: Actiontypes.RESEND_SUCCESS,
          // user: data,
        });
        ToastError('Email verification send successfully,');
      }
    });
  };
};

export const ClearError = () => ({
  type: Actiontypes.CLEAR_ERROR,
});

export const CheckFacebook = (data, nav, page, platform) => {
  console.log({data});
  return (dispatch) => {
    dispatch({
      type: Actiontypes.LOGIN,
    });
    login(`user/check-facebook`, data)
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: Actiontypes.LOGIN_SUCCESS,
            user: data,
          });
          nav.navigate(page, {token: data?.token});
          dispatch(ClearError());
        } else {
          dispatch({
            type: Actiontypes.LOGIN_UNSUCCESS,
            isFacebookLogin: true,
          });
        }
      })
      .catch((err) => {
        console.warn(err);
        dispatch({
          type: Actiontypes.LOGIN_UNSUCCESS,
        });
      });
  };
};

export const LoginFacebook = (data, nav, page, platform) => {
  console.log({data});
  return (dispatch) => {
    dispatch({
      type: Actiontypes.LOGIN,
    });
    login(`user/login-facebook`, data)
      .then(({data}) => {
        // console.log(data.user.role)

        if (data.success) {
          dispatch({
            type: Actiontypes.LOGIN_SUCCESS,
            user: data,
          });
          nav.navigate(page, {token: data?.token});
          dispatch(ClearError());
        } else {
          dispatch({
            type: Actiontypes.LOGIN_UNSUCCESS,
            error: data.msg,
          });
        }
      })
      .catch((err) => {
        console.warn(err);
        dispatch({
          type: Actiontypes.LOGIN_UNSUCCESS,
        });
      });
  };
};

export const Logout = (nav) => {
  return (dispatch) => {
    nav.navigate('Login');
    AsyncStorage.setItem('Auth', '{}');
    dispatch({
      type: Actiontypes.LOGOUT,
    });
  };
};
