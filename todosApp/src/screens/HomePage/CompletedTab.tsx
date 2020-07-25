import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {TodosListContext} from '../../dataProvider';

export default function CompletedTab() {
  const todos = useContext(TodosListContext);

  return (
    <View>
      <Text>Complete</Text>
    </View>
  );
}
