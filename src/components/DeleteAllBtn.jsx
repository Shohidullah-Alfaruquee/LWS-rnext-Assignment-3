import { useTasksDispatch } from '../context/taskContext';

const DeleteAllBtn = () => {
  const dispatch = useTasksDispatch();

  const deleteAllTask = () => {
    dispatch({
      type: 'deleteAllTasks',
    });
  };
  return (
    <button
      className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
      onClick={deleteAllTask}
    >
      Delete All
    </button>
  );
};
export default DeleteAllBtn;
