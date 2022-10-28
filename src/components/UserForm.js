import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../App.css";
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';





const UserForm = () => {

   

  return (
    <div>
        
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
          <Typography variant="h3" component="div" className="heading"  sx={{ flexGrow: 1 }}>
          MultiStep Form
          </Typography>
      </AppBar>
     <FormUserDetails />
      <FormPersonalDetails />
 </Box>

      
    
    </div>
  );
}
 export default UserForm;