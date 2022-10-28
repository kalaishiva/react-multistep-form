import React from 'react';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import {Grid, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import "../App.css";


const FormPersonalDetails = () => {
  
  return (
    <div>
        <Grid  display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
  
          <Paper elevation={8} className="paperStyle" >
          
          <Typography variant="h4"  className="form-heading">Enter Personal details</Typography>
          <TextField label="Occupation" placeholder="Enter your Occupation" variant="standard" fullWidth required/>
          <TextField label="City" placeholder="Enter your City name" variant="standard" fullWidth required />
          <TextField label="Bio" placeholder="Enter your Bio" variant="standard" fullWidth required />
          
          <Grid  display="flex"  >
          <Button variant="contained" sx={{ mx: 3, px:4 }}>Back</Button>
          <Button variant="contained" sx={{px:4}}>Next</Button>
          </Grid>
  
          </Paper>
       
       </Grid>
       
    </div>
  )
}

export default FormPersonalDetails;