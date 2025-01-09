import React from 'react';
import { Button } from '@mui/material';

// StyledButton component
const StyledButton = ({ variant, color, onClick,width, disabled, children }) => {
  return (
    <Button
    
      variant={variant || 'contained'}  
      color={color || 'primary'}       
      onClick={onClick}
      disabled={disabled}              
      sx={{
        width:width,
        borderRadius: '8px',            
        textTransform: 'none',          
        fontSize: '16px',                
      }}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
