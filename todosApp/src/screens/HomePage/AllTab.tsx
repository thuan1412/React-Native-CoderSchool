import React, {useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {useSelector, useDispatch} from 'react-redux';

import {TodosListContext} from '../../dataProvider';
import TaskCard from '../../components/TaskCard';
import TaskDetail from '../TaskDetail';
import {Task} from '../../type';

enableScreens();
const TaskStack = createNativeStackNavigator();

function AllTab({navigation}) {
  const todos = useSelector<Array<Task>>((state) => state.todos) || [];
  console.log(todos);

  return (
    <View>
      <Text>All</Text>
      {todos.map((todo: Task, idx: number) => (
        <TaskCard
          key={idx}
          todo={todo}
          onPress={() => navigation.navigate('TaskDetail', todo)}
        />
      ))}
    </View>
  );
}

export default () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen name="AllTab" component={AllTab} />
      <TaskStack.Screen name="TaskDetail" component={TaskDetail} />
    </TaskStack.Navigator>
  );
};
