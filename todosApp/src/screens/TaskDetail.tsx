import React from 'react';
import {View, Text} from 'react-native';

export default function TaskDetail({route}) {
  console.log(route.params);

  return (
    <View>
      <Text>Task Detail</Text>
    </View>
  );
}
