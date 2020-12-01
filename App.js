import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import Navigation from './src/navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <StatusBar backgroundColor="green" style={styles.container}>
        <View>
          <Text>helllo</Text>
        </View> */}

      <Navigation />
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
