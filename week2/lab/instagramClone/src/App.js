/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import Feed from './components/Feed';

import Profile from './pages/Profile';

const feedData = [
  {
    id: 1,
    userName: 'Facebook',
    image: require('./assets/feedData/react.png'),
    postContent: 'Check it out',
    likes: 1000,
  },
];

const App = () => {
  return (
    <View>
      <Profile />
    </View>
  );
};

export default App;
