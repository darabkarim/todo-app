import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Container, Typography, CssBaseline, Box } from '@mui/material';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedText) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: updatedText } : task)));
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h2" align="center" gutterBottom>
            Task List
          </Typography>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </Box>
      </Container>
    </>
  );
}

export default App;
