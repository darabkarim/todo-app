import React, { useState } from 'react';
import { TableRow, TableCell, IconButton, TextField, Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

function TaskItem({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskText, setUpdatedTaskText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, updatedTaskText);
    setIsEditing(false);
  };

  return (
    <TableRow key={task.id}>
      {isEditing ? (
        <>
          <TableCell>
            <TextField
              fullWidth
              value={updatedTaskText}
              onChange={(e) => setUpdatedTaskText(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          </TableCell>
          <TableCell>
            <Button variant="contained" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>{task.text}</TableCell>
          <TableCell>
            <IconButton edge="end" aria-label="edit" onClick={() => setIsEditing(true)}>
              <Edit />
            </IconButton>
          </TableCell>
          <TableCell>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
              <Delete />
            </IconButton>
          </TableCell>
        </>
      )}
    </TableRow>
  );
}

export default TaskItem;
