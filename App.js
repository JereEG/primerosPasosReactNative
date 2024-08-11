import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navigation from './Navigation';
import {enableScreens} from 'react-native-screens';

enableScreens();

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
