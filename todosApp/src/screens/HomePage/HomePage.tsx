import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ActiveTab from './ActiveTab';
import AllTab from './AllTab';
import CompletedTab from './CompletedTab';

import {TodosListContext} from '../../dataProvider';
import {Task} from '../../type';
const Tab = createBottomTabNavigator();

export default function HomePage() {
  return (
    // <TodosListContext.Provider value={todosList}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          showLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string = '';

            if (route.name === 'All') {
              iconName = 'add-circle-outline';
            } else if (route.name === 'Completed') {
              iconName = 'checkmark-done-outline';
            } else if (route.name === 'Active') {
              iconName = 'list-outline';
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}>
        <Tab.Screen name="Completed" component={CompletedTab} />
        <Tab.Screen name="All" component={AllTab} />
        <Tab.Screen name="Active" component={ActiveTab} />
      </Tab.Navigator>
    </NavigationContainer>
    // </TodosListContext.Provider>
  );
}
