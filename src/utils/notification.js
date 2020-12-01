var PushNotification = require('react-native-push-notification');
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
const LocalNotification = (text, title) => {
  console.log('notiiiii');
  if (Platform.OS == 'ios') {
    PushNotificationIOS.presentLocalNotification({
      alertTitle: title,
      alertBody: text,
    });
  } else
    PushNotification.localNotification({
      autoCancel: true,
      bigText: text,
      // subText: 'Local Notification Demo',
      title: title,
      message: text,
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
    });
};
export default LocalNotification;
