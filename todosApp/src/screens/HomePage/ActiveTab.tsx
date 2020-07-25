import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {TodosListContext} from '../../dataProvider';
import TaskCard from '../../components/TaskCard';
import {Task} from '../../type';

export default function ActiveTab() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <View>
      <Text>Active</Text>
      {todos.map((todo: Task, idx: number) => (
        <TaskCard key={todo.id} todo={todo} />
      ))}
    </View>
  );
}
