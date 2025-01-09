import React, { useState, useEffect } from 'react';
import {  Typography, Card, CardContent } from '@mui/material';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from '../utils/localStorage';

const TaskMaster = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');

  // Load tasks from local storage on component mount
  useEffect(() => {
    setTasks(loadTasksFromLocalStorage());
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObject = { id: Date.now(), text: newTask, status: 'Pending' };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditTaskId(taskId);
    setEditTaskText(taskToEdit.text);
  };

  const saveEditedTask = () => {
    setTasks(tasks.map((task) => (task.id === editTaskId ? { ...task, text: editTaskText } : task)));
    setEditTaskId(null);
    setEditTaskText('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map((task) => 
      task.id === taskId 
        ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } 
        : task
    ));
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          TaskMaster
        </Typography>
        <TaskForm
          isEditing={!!editTaskId}
          taskText={editTaskId ? editTaskText : newTask}
          setTaskText={editTaskId ? setEditTaskText : setNewTask}
          handleSave={editTaskId ? saveEditedTask : handleAddTask}
        />
        {tasks.length > 0 && (
          <>
            <Typography variant="h6" gutterBottom>
              Task List
            </Typography>
            <TaskList 
              tasks={tasks} 
              handleEdit={handleEditTask} 
              handleDelete={handleDeleteTask} 
              toggleStatus={toggleTaskStatus}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskMaster;
