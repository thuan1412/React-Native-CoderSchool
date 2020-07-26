import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {useSelector, useDispatch} from 'react-redux';

import {TodosListContext} from '../../dataProvider';
import TaskCard from '../../components/TaskCard';
import TaskDetail from '../TaskDetail';

import {actions} from '../../redux/todo';

import {Task} from '../../type';

import styles from './styles';

enableScreens();
const TaskStack = createNativeStackNavigator();

function AllTab({navigation}) {
  const todos = useSelector<Array<Task>>((state) => state.todos);
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();

  const submit = (text: string) => {
    if (text === '') return;
    else {
      dispatch(actions.addTodo(text));
      setInput('');
    }
  };

  return (
    <View style={styles.tabScreent}>
      <ScrollView>
        <View style={styles.listContainer}>
          {todos.map((todo: Task, idx: number) => (
            <TaskCard
              key={idx}
              todo={todo}
              onPress={() => navigation.navigate('TaskDetail', todo)}
            />
          ))}
        </View>
        <TextInput
          style={styles.inputField}
          defaultValue={input}
          onChangeText={(text) => setInput(text)}
          placeholder="New task"
        />
        <Button onPress={() => submit(input)} title="Add" />
      </ScrollView>
    </View>
  );
}

export default () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        options={{headerShown: false}}
        name="AllTab"
        component={AllTab}
      />
      <TaskStack.Screen name="TaskDetail" component={TaskDetail} />
    </TaskStack.Navigator>
  );
};
