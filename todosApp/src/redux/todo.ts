// import {todos} from './todo';
import {Task} from '../type';

export const actionTypes = {
  TOGGLE_TODO: 'TOGGLE_TODO',
  ADD_TODO: 'ADD_TODO',
};

const addTodo = (text: string) => {
  return {
    type: actionTypes.ADD_TODO,
    text,
  };
};

const toggleTodo = (id: number) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id,
  };
};

export const actions = {addTodo, toggleTodo};

const INITIAL_STATE: {increment: number; todos: Array<Task>} = {
  increment: 4,
  todos: [
    {id: 1, title: 'todo 1', completed: false},
    {id: 2, title: 'todo 2', completed: false},
    {id: 3, title: 'todo 3', completed: false},
    {id: 4, title: 'todo 4', completed: false},
  ],
};

export const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        increment: action.increment + 1,
        todos: [
          ...state.todos,
          {
            id: action.incremnt + 1,
            title: action.title,
            completed: false,
          },
        ],
      };
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
        ),
      };
    default:
      return INITIAL_STATE;
  }
};
