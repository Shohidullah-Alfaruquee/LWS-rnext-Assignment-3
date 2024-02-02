import { useState } from 'react';
import { useTasks } from '../context/taskContext';

import DeleteAllBtn from './DeleteAllBtn';
import SearchBox from './SearchBox';

import TaskList from './TaskList';
import AddTaskBtn from './AddTaskBtn';

const TaskSection = ({ setIsAddingTask }) => {
  const [searchText, setSearchText] = useState('');
  const allTasks = useTasks();

  const filteredTasks = allTasks.filter((task) => {
    let text = new RegExp(`${searchText}`, 'i');
    return text.test(task.title);
  });
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <SearchBox
                onSearchHandler={setSearchText}
                searchText={searchText}
              />
              <AddTaskBtn setIsAddingTask={setIsAddingTask} />
              <DeleteAllBtn />
            </div>
          </div>
          <div className="overflow-auto">
            {allTasks.length > 0 ? (
              <TaskList
                tasks={searchText.length > 0 ? filteredTasks : allTasks}
              />
            ) : (
              'Task List is empty!'
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskSection;
