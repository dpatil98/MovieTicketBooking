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

  let a={};
  const [addScreenStatus ,setAddScreenStatus]= React.useState(false);
  const [theaterData ,setTheaterData] = React.useState([{TotalScreen:0}]);
  
  // localStorage.clear();
  
 


  if(!localStorage.getItem('TheaterData') )
  {
    
    console.log("Local Storage is MT");
  }
  else{

    a= JSON.parse( localStorage.getItem('TheaterData') );
    console.log("DataSendByAddScreen", a );
    setTheaterData([a])
    localStorage.removeItem('TheaterData');
   
  }

   console.log("TheaterData",theaterData[0] );
  // React.useEffect(()=>{ setTheaterData([a]) },[]);  

  // const handleaddScreen=()=>setAddScreenStatus(true);


  const handleaddScreen=()=>{
    
    setAddScreenStatus(true);
    localStorage.setItem('ShowAddScreen', true );
  
  };
 

  const handleTheaterData=(data,keyName)=>{

     
    setTheaterData( [{...theaterData[0],  [keyName] : data }] );

  }

  // console.log('theaterData',addScreenStatus);


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
      <hr/>
      <div className='Add-form-container'>
          <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '25ch' },}}
              noValidate
              autoComplete="off"
          >
              <TextField id="standard-basic" 
              label="Theater Name" 
              onChange={(e)=>handleTheaterData(e.target.value,'TheaterName') } 
              variant="standard" sx={{ input:{ color: 'white' } }} 
              InputLabelProps={{style: { color: '#ddd' ,fontSize:'14px'} }}
              defaultValue={theaterData[0].TheaterName}
              />

              <TextField id="standard-basic" 
              label="City"   
              onChange={(e)=>handleTheaterData(e.target.value,'City') }       
              variant="standard"  
              sx={{ input:{ color: 'white' } }} 
              InputLabelProps={{style: { color: '#ddd' ,fontSize:'14px'} }} 
              defaultValue={theaterData[0].City}
              />

              {/* <TextField id="standard-basic" 
              label="Screen"       
              variant="standard"  
              sx={{ input:{ color: 'white' } }} 
              InputLabelProps={{style: { color: '#ddd' ,fontSize:'14px'} }} 
              /> */}

              <TextField id="standard-basic" 
              label="Added Screens" 
              value={theaterData[0].TotalScreen}     
              variant="standard"  
              sx={{ input:{ color: 'white'} }} 
              InputLabelProps={{style: { color: '#ddd' ,fontSize:'14px'} }} 
              InputProps={{
                readOnly: true,
              }}
              />


              <Button variant="contained" onClick={()=>handleaddScreen()} startIcon={<AddCircleOutlineIcon />}>AddScreen</Button>
          </Box>

          
      </div>

          {/* {(addScreenStatus)?<AddScreen theaterData={theaterData} />: null } */}

          { ( Boolean( localStorage.getItem('ShowAddScreen')) )?<AddScreen theaterData={theaterData} />: null }
          
          
              
  </div>

  );

}


