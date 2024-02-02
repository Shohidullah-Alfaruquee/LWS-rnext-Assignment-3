const initialTasks = [
  {
    id: 1,
    favorite: false,
    title: 'Learning',
    description:
      'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
    tags: 'JS, React, Tailwind, NextJS',
    priority: 'High',
  },
  {
    id: 2,
    favorite: true,
    title: 'Learning NextJS',
    description:
      'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
    tags: 'JS, React, Tailwind, NextJS',
    priority: 'High',
  },
];

const getAllData = () => {
  return initialTasks;
};
export default getAllData;
