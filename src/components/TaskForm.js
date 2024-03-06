import React, { useState } from 'react';
import { TextField, Button, Grid  } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({ id: uuidv4(), text: task });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Add Task"
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button size='large' type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TaskForm;
