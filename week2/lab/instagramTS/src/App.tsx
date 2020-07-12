/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import Home from './screens/Home';
import Profile from './screens/Profile';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Home /> */}
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
