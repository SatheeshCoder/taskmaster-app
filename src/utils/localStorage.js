// Save tasks to localStorage
export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Load tasks from localStorage
export const loadTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('tasks')) || [];
};



