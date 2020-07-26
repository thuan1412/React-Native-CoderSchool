import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {TodosListContext} from '../../dataProvider';
import TaskCard from '../../components/TaskCard';
import {Task} from '../../type';

import styles from './styles';

export default function ActiveTab({navigation}) {
  const todos = useSelector<Array<Task>>((state) => state.todos);

  return (
    <View style={styles.tabScreent}>
      <ScrollView style={styles.listContainer}>
        {todos
          .filter((todo: Task) => todo.completed)
          .map((todo: Task, idx: number) => (
            <TaskCard
              key={todo.id}
              todo={todo}
              onPress={() => navigation.navigate('TaskDetail', todo)}
            />
          ))}
      </ScrollView>
    </View>
  );
}
