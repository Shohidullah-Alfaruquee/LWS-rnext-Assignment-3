import { useState } from 'react';
import { useTasksDispatch } from '../context/taskContext';
import Tags from './Tags';

const Task = ({ task }) => {
  const dispatch = useTasksDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [priority, setPriority] = useState('');

  const deleteTask = (id) => {
    dispatch({
      type: 'deleteTask',
      id: id,
    });
  };
  const favoriteTaskToggle = (task) => {
    const newTask = {
      ...task,
      favorite: !task.favorite,
    };

    dispatch({
      type: 'editTask',
      task: newTask,
    });
  };
  const editBtnClickHandler = (task) => {
    setIsEditing(true);
    setTitle(task.title);
    setDescription(task.description);
    setTags(task.tags);
    setPriority(task.priority);
  };
  const editedTaskSubmitHandler = (task) => {
    if (title.length === 0) {
      alert('title is required');
    } else if (description.length === 0) {
      alert('Description is required');
    } else if (tags.length === 0) {
      alert('Tags is required');
    } else if (priority.length === 0) {
      alert('Priority is required');
    } else {
      const editedTask = {
        ...task,
        title,
        description,
        tags,
        priority,
      };
      dispatch({
        type: 'editTask',
        task: editedTask,
      });
      setIsEditing(false);
    }
  };
  return (
    <tr
      key={task.id}
      className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
    >
      <td onClick={() => favoriteTaskToggle(task)}>
        {task.favorite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-star"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="yellow"
            fill="yellow"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-star"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          task.title
        )}
      </td>
      <td>
        <div>
          {isEditing ? (
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={description}
            ></textarea>
          ) : (
            task.description
          )}
        </div>
      </td>
      <td>
        {isEditing ? (
          <input
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="tags"
            id="tags"
            required
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        ) : (
          <Tags tagsString={task.tags} />
        )}
      </td>
      <td className="text-center">
        {isEditing ? (
          <select
            className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
            name="priority"
            id="priority"
            required
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        ) : (
          task.priority
        )}
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button
            className="text-red-500"
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            Delete
          </button>
          {isEditing ? (
            <button
              className="text-blue-500"
              onClick={() => editedTaskSubmitHandler(task)}
            >
              Save
            </button>
          ) : (
            <button
              className="text-blue-500"
              onClick={() => editBtnClickHandler(task)}
            >
              Edit
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default Task;
