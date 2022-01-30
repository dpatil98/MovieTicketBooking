import * as React from 'react';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { AddScreen } from './AddScreen';

import{API_URL} from '../../App.js'


export function AddTheater() {

  let a={};
  const [addScreenStatus ,setAddScreenStatus]= React.useState(false);
  const [theaterData ,setTheaterData] = React.useState([{TotalScreens:0,Facilities:{},}]);
  const [count, setCount]= React.useState(0); //just to re-Render this componant for checkbox
  
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


  const handleFacilities=(key)=>{

    theaterData[0]['Facilities'][`${key}`]= (!theaterData[0]['Facilities'][`${key}`]) ? true:false;
    setCount(count+1);
   

  }
  // console.log('theaterData',addScreenStatus);

  const handleSave=async ()=>
  {

    console.log("saving..", theaterData);

      await  fetch(`${API_URL}/theaters/AddTheater`,{
      method : "POST",
      body: JSON.stringify(theaterData[0]),
      headers :{
          'Content-Type' : 'application/json'
      }
  
      })
      // .then(respone => console.log("Responese",respone.json() ) )
      // .catch( (e) => console.log(e));
    

      
      // console.log(result.message);
      // console.log(result.status);
      // if(result.status==="200"){ window.location.reload(); alert("success") }

      // setMessage(`${result.message} 🤨`);



  }

  return (

  <div className='theater-container'>
      <div className='dashboard-section-headers'>
          <div>
            <Typography className='container-title' sx={{ letterSpacing: '1px', fontWeight: '300' }} variant="h4"><CameraOutdoorIcon />  Add Theater</Typography>
          </div>
          <div>
            <Button variant="contained" color='success' onClick={()=>handleSave()} startIcon={< SaveIcon />}>
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
              value={theaterData[0].TotalScreens}     
              variant="standard"  
              sx={{ input:{ color: 'white'} }} 
              InputLabelProps={{style: { color: '#ddd' ,fontSize:'14px'} }} 
              InputProps={{
                readOnly: true,
              }}
              />

              <div className='addtheater-facilities-container'>
                <div>
                <Typography sx={{ letterSpacing: '1px', color: "#AAA"}} variant="h6">Facilities :</Typography>
                </div>
                <div  className='addtheater-facilities-container'>
                <FormControlLabel control={<Checkbox checked={ (theaterData[0]['Facilities']['MTicket']) ? true:false }  onClick={()=>{handleFacilities('MTicket')}} />} label="M-Tickeet" />
                <FormControlLabel control={<Checkbox checked={ (theaterData[0]['Facilities']['FAndB']) ? true:false }  onClick={()=>{handleFacilities('FAndB')}} />} label="Food and Beverages" />
                <FormControlLabel control={<Checkbox checked={ (theaterData[0]['Facilities']['WheelChair']) ? true:false }  onClick={()=>{handleFacilities('WheelChair')}} />} label="Wheel-Chair Facility" />
                <FormControlLabel control={<Checkbox checked={ (theaterData[0]['Facilities']['CarParking']) ? true:false }  onClick={()=>{handleFacilities('CarParking')}} />} label="Car Parking" />
                </div>
              </div>


              <Button variant="contained" onClick={()=>handleaddScreen()} startIcon={<AddCircleOutlineIcon />}>AddScreen</Button>
          </Box>

          
      </div>

          {/* {(addScreenStatus)?<AddScreen theaterData={theaterData} />: null } */}

          { ( Boolean( localStorage.getItem('ShowAddScreen')) )?<AddScreen theaterData={theaterData} />: null }
          
          
              
  </div>

  );

}


