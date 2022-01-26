import * as React from 'react';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import Button from '@mui/material/Button';
import StickyHeadTable from './Dashboard';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AddScreen } from './AddScreen';


export function AddTheater() {

  const [add ,setAdd]=React.useState(false);
    const handleaddScreen=()=>
    {

        setAdd(true);

    }

  return (

<div className='theater-container'>
    <div className='theater-headers'>
        <div>
          <Typography className='container-title' sx={{ letterSpacing: '1px', fontWeight: '300' }} variant="h4"><CameraOutdoorIcon />  Add Theater</Typography>
        </div>
        <div>
          <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
            Save
          </Button>
        </div>
    </div>
    <div className='Add-form-container'>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic" label="Theater Name" variant="standard" sx={{ input:{ color: 'white' } }} InputLabelProps={{style: { color: '#ddd' ,fontSize:'14px'} }}/>
            <TextField id="standard-basic" label="City"         variant="standard"  sx={{ input:{ color: 'white' } }} InputLabelProps={{style: { color: '#ddd' ,fontSize:'14px'} }} />
            <TextField id="standard-basic" label="Screen"       variant="standard"  sx={{ input:{ color: 'white' } }} InputLabelProps={{style: { color: '#ddd' ,fontSize:'14px'} }} />
            <Button variant="contained" onClick={()=>handleaddScreen()} startIcon={<AddCircleOutlineIcon />}>AddScreen</Button>
        </Box>

        
    </div>
        {(add)?<AddScreen />: null }
        
            
</div>

  );

}


