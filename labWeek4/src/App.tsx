import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home/Home';
const data = require('../data/Data/data.json');

console.log(data);

export default function App() {
  return <Home />;
}
