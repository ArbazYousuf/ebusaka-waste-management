import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {images} from './src/constants';
import RootNavigation from './src/navigation/RootNavigation';
import {AppProvider} from './src/Context/AppProvider';
import {Provider} from 'react-redux';
import Store from './src/redux/store';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <AppProvider>
          <RootNavigation />
        </AppProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
