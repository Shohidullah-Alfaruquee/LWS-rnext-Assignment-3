const AddTaskBtn = ({ setIsAddingTask }) => {
  return (
    <button
      className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
      onClick={() => setIsAddingTask(true)}
    >
      Add Task
    </button>
  );
};
export default AddTaskBtn;
