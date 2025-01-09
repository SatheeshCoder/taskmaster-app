import React from 'react';
import { Box, TextField } from '@mui/material';
import StyledButton from './StyledButton';

const TaskForm = ({ isEditing, taskText, setTaskText, handleSave }) => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: "column", gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          label={isEditing ? 'Edit task' : 'Add a new task'}
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Box sx={{display:"flex",justifyContent:"center"}}>
          <StyledButton onClick={handleSave} variant="contained" width={200}>
            {isEditing ? 'Save Task' : 'Add Task'}
          </StyledButton>
        </Box>
      </Box>

    </>
  );
};

export default TaskForm;
