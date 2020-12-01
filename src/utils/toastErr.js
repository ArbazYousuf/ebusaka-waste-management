// import Toast, { DURATION } from 'react-native-easy-toast'
import Toast from 'react-native-simple-toast';
import {ToastAndroid, Platform} from 'react-native';
function ToastError(msg) {
  if (Platform.OS == 'android') {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      100,
    );
  } else {
    Toast.show(msg);
  }
}

export default ToastError;
