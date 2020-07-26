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
  const bgColor = todo.completed ? 'green' : 'yellow';
  const textColor = todo.completed ? 'white' : 'black';

  const styles = StyleSheet.create({
    taskCard: {
      backgroundColor: bgColor,
      paddingLeft: 5,
      borderRadius: 5,
      alignItems: 'center',
      height: 40,
      width: 250,
      flexDirection: 'row',
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      color: textColor,
    },
    switch: {
      position: 'absolute',
      right: 10,
    },
  });

  return (
    <TouchableOpacity style={styles.taskCard} onPress={() => onPress()}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text>{todo.completed}</Text>
      <Switch
        style={styles.switch}
        onValueChange={() => {
          dispatch(actions.toggleTodo(todo.id));
        }}
        value={todo.completed}
      />
    </TouchableOpacity>
  );
}
