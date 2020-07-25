import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {actions} from '../redux/todo';

import {Task} from '../type';

export default function TaskCard({
  todo,
  onPress,
}: {
  todo: Task;
  onPress: Function;
}) {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.completed);
  const bgColor = todo.completed ? 'green' : 'yellow';
  // todo.completed = false;
  const styles = StyleSheet.create({
    taskCard: {
      backgroundColor: bgColor,
      height: 30,
      width: 250,
      flexDirection: 'row',
    },
    title: {
      fontSize: 24,
    },
  });

  return (
    <TouchableOpacity onPress={() => onPress} style={styles.taskCard}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text>{todo.completed}</Text>
      <Switch
        // style={styles.toggleTask}
        //  onPress={() =>onPress}
        onValueChange={() => {
          // setIsCompleted((isCompleted) => !isCompleted);
          dispatch(actions.toggleTodo(todo.id));
        }}
        value={todo.completed}
      />
    </TouchableOpacity>
  );
}
