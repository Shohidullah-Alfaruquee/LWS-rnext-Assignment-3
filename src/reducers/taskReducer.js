//action types
// add task, create task, favorite toggle, DeleteAll, delete task, edit task

import idGenerator from '../utility/idgenerator';

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case 'addTask': {
      return [
        ...tasks,
        {
          id: idGenerator(),
          favorite: false,
          title: action.title,
          description: action.description,
          tags: action.tags,
          priority: action.priority,
        },
      ];
    }
    case 'editTask': {
      const editedTasks = tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
      return editedTasks;
    }
    case 'deleteTask': {
      return tasks.filter((t) => t.id !== action.id);
    }
    case 'deleteAllTasks': {
      return [];
    }
    default: {
      return tasks;
    }
  }
};

export default taskReducer;
