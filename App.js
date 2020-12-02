import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import Navigation from './src/navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Splash from './src/screen/splash';

const App = () => {
  const [ready, setready] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setready(true);
    }, 2000);
  }, []);

  function renderApp() {
    if (!ready) {
      return <Splash />;
    } else {
      return <Navigation />;
    }
  }
  return (
    <SafeAreaProvider>
      {/* <StatusBar backgroundColor="green" style={styles.container}>
        <View>
          <Text>helllo</Text>
        </View> */}
      {/* <Navigation /> */}
      {renderApp()}
      {/* </StatusBar> */}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
