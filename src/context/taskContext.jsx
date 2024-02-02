import { createContext, useReducer, useContext } from 'react';

import getAllData from '../data/taskData';
import taskReducer from '../reducers/taskReducer';
export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, getAllData());

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  return useContext(TaskContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasksDispatch() {
  return useContext(TaskDispatchContext);
}
