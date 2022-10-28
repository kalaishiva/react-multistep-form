import React from 'react';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import {Grid, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import "../App.css";


const FormUserDetails = () => {
    
  return (
    <div>
        <Grid  display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
  
          <Paper elevation={10} className="paperStyle" >
          
          <Typography variant="h4"  className="form-heading">Enter user details</Typography>
          <TextField label="Firstname" placeholder="Enter your First name" variant="standard" fullWidth required/>
          <TextField label="Lastname" placeholder="Enter your Last name" variant="standard" fullWidth required />
          <TextField label="Email" placeholder="Enter your email" variant="standard" fullWidth required />
          <Button variant="contained">Next</Button>
  
          </Paper>
       
       </Grid>
       
    </div>
  )
}

export default FormUserDetails;