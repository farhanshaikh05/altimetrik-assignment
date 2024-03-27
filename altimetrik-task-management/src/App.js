import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.min.js';

const API_BASE = process.env.REACT_APP_API_BASE;

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(API_BASE + '/api/tasks?t=10');
    console.log('api response', response);
    setTasks(response.data);
  };

  const addTask = async (task) => {
    var createRes = await axios.post(API_BASE + '/api/tasks', task);
    console.log("createRes:", createRes);
    fetchTasks();
  };

  const updateTask = async (id, updatedTask) => {
    await axios.put(API_BASE + `/api/tasks/${id}`, updatedTask);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(API_BASE + `/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="App">
      <h1>Task Management Application</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
