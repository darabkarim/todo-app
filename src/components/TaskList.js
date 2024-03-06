import React from 'react';
import TaskItem from './TaskItem';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskList;
