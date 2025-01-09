import React from 'react';
import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StyledButton from './StyledButton';

const TaskList = ({ tasks, handleEdit, handleDelete, toggleStatus }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: 1,
            mb: 1,
            padding: 1,
          }}
        >
          <ListItemText
            primary={task.text}
            secondary={`Status: ${task.status}`}
          />
          <Box>
            <StyledButton onClick={() => toggleStatus(task.id)} variant={"outlined"} color={task.status === 'Completed' ? 'success' : 'warning'}>
              {task.status === 'Completed' ? 'Mark as Pending' : 'Mark as Completed'}
            </StyledButton>
            <IconButton color="primary" onClick={() => handleEdit(task.id)}>
              <EditIcon />
            </IconButton>
            <IconButton color="secondary" onClick={() => handleDelete(task.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
