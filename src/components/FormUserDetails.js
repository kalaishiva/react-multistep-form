import React from 'react';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import {Grid, Button} from '@mui/material';
import Typography from '@mui/material/Typography';


const FormUserDetails = () => {
    const paperStyle = {
        padding : 20,
        height : '60vh',
        width : 400,
        margin : '20px auto',

        display:"flex",
        flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center",
  
    }
  return (
    <div>
        <Grid  display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh">
  
          <Paper elevation={10} style={paperStyle} >
          <Typography variant="h4"  className="form-heading"  >
            Enter user details
            </Typography>
          <TextField label="Firstname" placeholder="Enter your First name" variant="standard" fullWidth required/>
          <TextField label="Lastname" placeholder="Enter your Last name" variant="standard" fullWidth required />
          <TextField label="Email" placeholder="Enter your email" variant="standard" fullWidth required />
          <Button variant="contained">Next</Button>
  
          </Paper>
       
          </Grid></div>
  )
}

export default FormUserDetails;