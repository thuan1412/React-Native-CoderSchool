import React from 'react';

import {Task} from './type';
export const TodosListContext: React.Context<Array<Task>> = React.createContext(
  [],
);
