import { useState } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import TasksProvider from '../context/taskContext';
import AddTaskForm from './AddTaskForm';
import Footer from './Footer';
import TaskSection from './TaskSection';

const TaskerApp = () => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  return (
    <TasksProvider>
      <Nav isAddingTask={isAddingTask}/>

      {isAddingTask ? (
        <AddTaskForm setIsAddingTask={setIsAddingTask} />
      ) : (
        <>
          <Hero />
          <TaskSection setIsAddingTask={setIsAddingTask} />
        </>
      )}
      <Footer />
    </TasksProvider>
  );
};
export default TaskerApp;
