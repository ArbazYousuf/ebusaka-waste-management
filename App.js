import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {images} from './src/constants';
import RootNavigation from './src/navigation/RootNavigation';
import {AppProvider} from './src/Context/AppProvider';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <AppProvider>
        <RootNavigation />
      </AppProvider>
    </SafeAreaProvider>
  );
}
export default App;
