import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height - 150,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  status: {
    fontSize: 16,
  },
});

export default function TaskDetail({route}) {
  const taskTitle: string = route.params.title;
  const taskStatus: boolean = route.params.completed;
  const taskId: number = route.params.id;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{taskTitle}</Text>
      <Text style={styles.status}>{taskStatus.toString()}</Text>
    </View>
  );
}
