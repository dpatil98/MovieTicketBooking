import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router';
import{API_URL} from '../../App.js'

import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalMoviesTwoToneIcon from '@mui/icons-material/LocalMoviesTwoTone';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SaveIcon from '@mui/icons-material/Save';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';



export function AddMovieBox() {
 

  const history =useHistory();

  const [reRender, SetReRender] = useState(true);

  const [allTheaters, SetAllTheaters] = useState("");

  const [name, SetName] = useState("");
  const [poster, SetPoster] = useState("");
  const [rating, SetRating] = useState("");
  const [summary, SetSummary] = useState("");
  const [RTomatoes, SetRTomatoes] = useState("");

  const [mDuration, SetMDuration] = useState({hr:'0',min:'00'});
  const [languages, SetLanguages] = useState({});
  const [genre, SetGenre] = useState({});
  const [format, SetFormat] = useState({});

  const [trailer, SetTrailer] = useState([{},]);
  const [totalClips, SetTotalClips] = useState(1);

  const [totalCast, SetTotalCast] = useState(1);
  const [castData, SetCastData] = useState([{},]);

  const [totalCrew, SetTotalCrew] = useState(1);
  const [crewData, SetCrewData] = useState([{},]);

  const [totalTheaters, SetTotalTheaters] = useState(1);
  //note:idea:shows wont show if screen alreay booked on this date by another movie
  // const [assignedTheatersData, SetAssignedTheatersData] = useState([{city:'pune',theatername:'Inox',screen:'Screen1',date:'11-09-2022',shows:{1:'11:40',2:'3:45',}},]);
  const [totalAssignedTheaters, SetTotalAssignedTheaters] = useState(1);
  // const [assignedTheatersData, SetAssignedTheatersData] = useState([{TotalShows:1, Shows:{} }]);
  const [assignedTheatersData, SetAssignedTheatersData] = useState([{TotalShows:1, Shows:[{},] }]);

  const [totalShows, SetTotalShows] = useState(1);
  // const [assignedTheatersData, SetAssignedTheatersData] = useState([{}]);

  // console.log("tailer: ",trailer);
  // console.log("Cast: ",castData);
  // console.log("Crew: ",crewData);
  // console.log("Lang",languages);
  // console.log("Genre",genre);
  // console.log("Format",format);
  console.log("All Theaters",allTheaters);
  console.log("Assigned Theater",assignedTheatersData);


  const handleSaveMovie = async () => {


    const NewMovie = { trailer, name, poster, summary, rating,RTomatoes,mDuration,languages,genre,format,totalClips,totalCast,castData,totalCrew,crewData,totalAssignedTheaters ,assignedTheatersData };
    //key is not used while makin obj bcus both key and value name are same
    // console.log(NewMovie);

    await  fetch(`${API_URL}/movies/AddMovie`,{
      method : "POST",
      body: JSON.stringify(NewMovie),
      headers :{
          'Content-Type' : 'application/json'
      }
  
      })


    //     fetch("https://616d44bb37f997001745d948.mockapi.io/movies",{
    //     method : "POST",
    //     body: JSON.stringify(NewMovie),
    //     headers :{
    //         'Content-Type' : 'application/json'
    //     }
    
    //     }).then(() => history.push("/Movies"));

   
  
  };

  React.useEffect(async ()=>{
      
      // console.log("Getting Theaters");

      await fetch(`${API_URL}/theaters`,{
      method : "GET"  
      }).then((response) => response.json())
        .then(data => SetAllTheaters(data))
        .catch( (e) => console.log(e));
      
  },[]);

  const handleClipsData=(data,i,key)=>{

    // SetTrailer([...trailer , trailer[i]['link']= ])
    
    // console.log("inx : ",i + " Data:", data);
    trailer[i][`${key}`]=data;
  }

  const handleHowManyClips=()=>
  {
    let TrailersNClips=[];
    for(let i=0;i<totalClips;i++)
    {
      TrailersNClips.push(
      <div key={'trailer'+i} >

      <TextField id="standard-basic"
      key={'link'+i}
      label="Trailer URL "
      variant="standard"
      // value={trailer[i]}
      sx={{ input: { color: "white", margin: "0 20px" } }}
      InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
      onChange={(event) => handleClipsData(event.target.value ,i,'link') } />

      <TextField id="standard-basic"
      key={'title'+i}
      label="Trailer Title "
      variant="standard"
      // value={trailer[i]}
      sx={{ input: { color: "white", margin: "0 20px" } }}
      InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
      onChange={(event) => handleClipsData(event.target.value ,i,'title') } />  

      </div>)
    }
    return TrailersNClips;
  }

  const handleAddClipInput=()=>
  {
    
    SetTotalClips(totalClips+1);
    SetTrailer([...trailer ,{}  ])
  }

  const handleRemoveClipInput=()=>
  {
    if(totalClips>0)
    {
      SetTotalClips(totalClips-1);
      SetTrailer(trailer.slice(0, -1) );
    }
    
  }




  const handleCastData=(data,i,key)=>{

    castData[i][`${key}`]=data;
  }

  const handleHowManyCast=()=>
  {
    let castFields=[];
    for(let i=0;i<totalCast;i++)
    {
      castFields.push(<div key={i}>
        
      {i+1+')'}<TextField id="standard-basic"
      key={'castDP'+i}
      label="Cast's Profilepic (Link)"
      variant="standard"
      // value={trailer[i]}
      sx={{ input: { color: "white", margin: "0 20px" } }}
      InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
      onChange={(event) => handleCastData(event.target.value ,i,"profilePic") } />

      <TextField id="standard-basic"
      key={'castN'+i}
      label="Real Name"
      variant="standard"
      // value={trailer[i]}
      sx={{ input: { color: "white", margin: "0 20px" } }}
      InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
      onChange={(event) => handleCastData(event.target.value ,i,"ActorName") } />
      
      <TextField id="standard-basic"
      key={'castMN'+i}
      label="Reel Name(InMovie)"
      variant="standard"
      // value={trailer[i]}
      sx={{ input: { color: "white", margin: "0 20px" } }}
      InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
      onChange={(event) => handleCastData(event.target.value ,i,"InMovieName") } />
      <hr/>
      </div>)
      
    }
    return castFields;
  }

  const handleAddCastInput=()=>
  {
    
    SetTotalCast(totalCast+1);
    SetCastData([...castData ,{}  ])
  }

  const handleRemoveCastInput=()=>
  {
    if(totalCast>0)
    {
      SetTotalCast(totalCast-1);
      SetCastData(castData.slice(0, -1) );
    }
    
  }


  
  const handleCrewData=(data,i,key)=>{

    crewData[i][`${key}`]=data;
  }

  const handleHowManyCrew=()=>
  {
    let crewFields=[];
    for(let i=0;i<totalCrew;i++)
    {
      crewFields.push(
      
      <div key={i}>
        
      {i+1+')'}<TextField id="standard-basic"
      key={'crewDP'+i}
      label="Crew's Profilepic (Link)"
      variant="standard"
      // value={trailer[i]}
      sx={{ input: { color: "white", margin: "0 20px" } }}
      InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
      onChange={(event) => handleCrewData(event.target.value ,i,"profilePic") } />

      <TextField id="standard-basic"
      key={'crewN'+i}
      label="Crew's Name"
      variant="standard"
      // value={trailer[i]}
      sx={{ input: { color: "white", margin: "0 20px" } }}
      InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
      onChange={(event) =>handleCrewData(event.target.value ,i,"CrewName") } />
      
      <TextField id="standard-basic"
      key={'crewC'+i}
      label="Contribution"
      variant="standard"
      // value={trailer[i]}
      sx={{ input: { color: "white", margin: "0 20px" } }}
      InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
      onChange={(event) =>handleCrewData(event.target.value ,i,"CrewContribution") } />
      <hr/>
      </div>
      );
      
    }
    return  crewFields;
  }

  const handleAddCrewInput=()=>
  {
    
    SetTotalCrew(totalCrew+1);
    SetCrewData([...crewData ,{}  ])
  }

  const handleRemoveCrewInput=()=>
  {
    if(totalCrew>0)
    {
      SetTotalCrew(totalCrew-1);
      SetCrewData(crewData.slice(0, -1) );
    }
    
  }



  const handleLanguages=(key)=>
  {
    // console.log(key);
    languages[`${key}`]=(!languages[`${key}`]) ? true : false ;
  }

  const handleGenre=(key)=>
  {
    // console.log(key);
    genre[`${key}`]=(!genre[`${key}`]) ? true : false ;
  }

  const handleFormat=(key)=>
  {
    // console.log(key);
    format[`${key}`]=(!format[`${key}`]) ? true : false ;
  }



  const handleAssignedShows=(data,i,theaterIndex,key)=>{
    // console.log(data,i,key);

    // assignedTheatersData[theaterIndex].Shows[`${key}`]=data;
    let currTName= assignedTheatersData[theaterIndex].TheaterName;
    let currScreen= assignedTheatersData[theaterIndex].ScreenNo;
    let ScreenStruct = allTheaters.filter(t=>t.TheaterName=== currTName);
    assignedTheatersData[theaterIndex].Shows[i-1][`${key}`]=data;
    assignedTheatersData[theaterIndex].Shows[i-1]['ScreenStructure']=ScreenStruct[0][currScreen];
    // console.log("AssigningShow",);
    SetReRender( !reRender);
  }

  const handleAddAssignedShows=(theaterIndex)=>{

    SetTotalShows(totalShows+1);
    assignedTheatersData[theaterIndex].TotalShows+=1;
    assignedTheatersData[theaterIndex].Shows.push({});
    console.log("Adding show..",);
    // SetAssignedTheatersData([...assignedTheatersData[] ,{}  ])

  }

  const handleRemoveAssignedShows=(theaterIndex)=>{

    //old code
    // if(assignedTheatersData[theaterIndex].TotalShows>0)
    // { 
    //  const lastShow=`show${assignedTheatersData[theaterIndex].TotalShows}`;
    //   delete assignedTheatersData[theaterIndex].Shows[lastShow];
    //   assignedTheatersData[theaterIndex].TotalShows-=1;
    //   // let keys = Object.keys(assignedTheatersData[theaterIndex].Shows)
    //   // delete assignedTheatersData[theaterIndex].Shows[keys[keys.length-1]]
      
    //  SetReRender(!reRender);
    // }

    if(assignedTheatersData[theaterIndex].TotalShows>0)
    { 
      assignedTheatersData[theaterIndex].Shows.pop(); 
      assignedTheatersData[theaterIndex].TotalShows-=1;    
     SetReRender(!reRender);
    }
  }



  const handleAssignedTheaterData=(data,i,key)=>{

    assignedTheatersData[i][`${key}`]=data;
    SetReRender( !reRender);
  }

  const handleHowManyTheater=()=>
  {
    let Theaters=[];
    
    const TheatersInCity=(cityName)=>{
      return  allTheaters.map((a) =>(cityName===a.City)?a.TheaterName:null ).filter(notempty => (notempty)!=null )
    }

    const ScreensInTheater=(TName)=>{

      let SelctedTheater=allTheaters.filter( T => T.TheaterName===TName );
    
      let MenuItems=[];
      for(let i=1;i<=SelctedTheater[0].TotalScreens;i++)
      {
        MenuItems.push(<MenuItem key={"scr"+i} value={`Screen${i}`} >Screen{i}</MenuItem>)
      }
      return  MenuItems;
    }

    const handleHowManyShows=(theaterIndex)=>{

      let shows=[];

      for(let i=1;i<=assignedTheatersData[theaterIndex].TotalShows;i++)
      {
        shows.push(<TextField
          id="date"
          label={`Show${i}`}
          type="time"
          value={(assignedTheatersData[theaterIndex].Shows[i-1][`show${i}`])?assignedTheatersData[theaterIndex].Shows[i-1][`show${i}`]:""}
          // defaultValue="2017-05-24"
          onChange={(event) => {
            handleAssignedShows(event.target.value,i,theaterIndex,`show${i}`)
          }}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          />)
      }

      return shows;
    }


     if(allTheaters)
    {
      let cities;
      const allcities= allTheaters.map((a) =>  a.City)
      cities = allcities.filter((v, i, a) => a.indexOf(v) === i);
        // console.log("cities",cities);
      
        for(let i=0;i<totalAssignedTheaters;i++)
        {
          Theaters.push( 
          <div className='assignTheater-oneTheater'>  
          <FormControl key={"CS"+i} sx={{  minWidth: 120, color:'white' }}>

            <InputLabel  id="demo-simple-select-helper-label">City </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={(assignedTheatersData[i]['City'])?assignedTheatersData[i]['City']:""}
              label="Age"
              sx={{ color:'white' }}
              onChange={(event) => {
                handleAssignedTheaterData(event.target.value,i,'City')
                
              }}
            >
            {cities.map((city,ind) => <MenuItem key={"C"+ind} value={city} >{city}</MenuItem> )}
            </Select>
          </FormControl> 

            {(assignedTheatersData[i]['City']) ?
            
            <FormControl key={'TN'+i} sx={{ minWidth: 120, color:'white' }}> 
                <InputLabel  id="demo-simple-select-helper-label">Theater Name </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={(assignedTheatersData[i]['TheaterName'])?assignedTheatersData[i]['TheaterName']:""}
                    label="TheaterName"
                    sx={{ color:'white' }}
                    onChange={(event) => {
                      handleAssignedTheaterData(event.target.value,i,'TheaterName')
                      
                    }}
                  >
                  {TheatersInCity(assignedTheatersData[i]['City']).map((TName,ind) => <MenuItem key={"TNM"+ind} value={TName} >{TName}</MenuItem> )}
                  </Select>
            
            </FormControl> 
             :null}


             {(assignedTheatersData[i]['TheaterName']) ?
            
            <FormControl key={'SN'+i} sx={{ minWidth: 120, color:'white' }}> 
                <InputLabel  id="demo-simple-select-helper-label">Screen</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={(assignedTheatersData[i]['ScreenNo'])?assignedTheatersData[i]['ScreenNo']:""}
                    label="ScreenNo"
                    sx={{ color:'white' }}
                    onChange={(event) => {
                      handleAssignedTheaterData(event.target.value,i,'ScreenNo')
                      
                    }}
                  >
                  {ScreensInTheater(assignedTheatersData[i]['TheaterName'])}
                  </Select>
            
            </FormControl> 
             :null}

            {(assignedTheatersData[i]['ScreenNo']) ?
            <div>
                  <TextField
                  id="date"
                  label="Start Date"
                  type="date"
                  value={(assignedTheatersData[i]['StartDate'])?assignedTheatersData[i]['StartDate']:""}
                  // defaultValue="2017-05-24"
                  onChange={(event) => {
                    handleAssignedTheaterData(event.target.value,i,'StartDate')
                  }}
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
                  <TextField
                  id="date"
                  label="End Date"
                  type="date"
                  value={(assignedTheatersData[i]['EndDate'])?assignedTheatersData[i]['EndDate']:""}
                  onChange={(event) => {
                    handleAssignedTheaterData(event.target.value,i,'EndDate')
                  }}
                  // defaultValue="2017-05-24"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  /> 
            </div>
             :null}

            {(assignedTheatersData[i]['StartDate'] && assignedTheatersData[i]['EndDate']) ?
            <div>

                    {handleHowManyShows(i)}

                <div className='addmovie-frombtn-grp'>
                  <Button  variant="contained" onClick={()=>handleAddAssignedShows(i) }   startIcon={<AddCircleOutlineIcon />}>Add Show</Button>
                  <Button  variant="contained" onClick={()=>handleRemoveAssignedShows(i)} color='warning' startIcon={<RemoveCircleTwoToneIcon />}>Remove Show</Button>
                </div>
            </div>
             :null}
            <hr/>
            </div>
            
          );
        }
    }
      return Theaters;

  }

  const handleAddAssignedTheater=()=>{

    SetTotalAssignedTheaters(totalAssignedTheaters+1);
    SetAssignedTheatersData([...assignedTheatersData ,{TotalShows:1, Shows:[{},]}  ])

  }

  const handleRemoveAssignedTheater=()=>{

    if(totalAssignedTheaters>0)
    {
      SetTotalAssignedTheaters(totalAssignedTheaters-1);
      SetAssignedTheatersData(assignedTheatersData.slice(0, -1) );
    }
  }
















  return (

    <div className="AddMovie-container ">

      <div className='dashboard-section-headers'>
          <div>
              <Typography className='container-title' sx={{ letterSpacing: '1px', fontWeight: '300' }} variant="h4"><LocalMoviesTwoToneIcon /> Add Movie :</Typography>
          </div>
          <div>
            <Button  variant="contained" startIcon={<SaveIcon />}>Save</Button>
          </div>
      </div>      
      
      <div >
      <FormGroup  className='addmovie-form-conainer'>

      <TextField
        sx={{ input: { color: "white", margin: "0 20px" } }}
        InputLabelProps={{ style: { color: "#AAA", margin: "0 20px" } }}
        label="Poster Link"
        id="standard-basic"
        variant="standard"
        value={poster}
        onChange={(event) => SetPoster(event.target.value)} />

      <TextField id="standard-basic"
        label="Movie Name"
        variant="standard"
        value={name}
        sx={{ input: { color: "white", margin: "0 20px" } }}
        InputLabelProps={{ style: {color: "#AAA", margin: "0 20px" } }}
        onChange={(event) => SetName(event.target.value)} />

      {/* <TextField id="standard-basic"
        label="Rating(UA/R-rated)"
        variant="standard"
        value={rating}
        sx={{ input: { color: "white", margin: "0 20px" } }}
        InputLabelProps={{ style: { color: "#AAA", margin: "0 20px" } }}
        onChange={(event) => SetRating(event.target.value)} /> */}

      <TextField id="standard-basic"
        label="Summary "
        variant="standard"
        // value={summary}
        sx={{ input: { color: "white", margin: "0 20px" } }}
        InputLabelProps={{ style: { color: "#AAA", margin: "0 20px" } }}
        onChange={(event) => SetSummary(event.target.value)} />

      <div>
      <TextField id="standard-basic"
        label="Rotton Tomato Score "
        variant="standard"
        // value={RTomatoes}
        type='number'
        InputProps={{ inputProps: { max: 100, min: 0, pattern: '[0-9]*'  }} }
        sx={{ input: { color: "white", margin: "0 20px" ,width:'150px'} }}
        InputLabelProps={{ style: { color: "#AAA", margin: "0 20px" } }}
        onChange={(event) => {SetRTomatoes(event.target.value)}} />
      </div>

      <div>
        <div>
          <Typography sx={{ letterSpacing: '1px', color: "#AAA"}} variant="h6">Duration :</Typography>
        </div>
        <TextField id="standard-basic"
        label="Hr"
        type='number'
        InputProps={{ inputProps: { max: 24, min: 0, pattern: '[0-9]*'  }} }
        variant="standard"        
        sx={{ input: { color: "white", margin: "0 20px" } }}
        InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
        onChange={(event) => {mDuration.hr=event.target.value}} />

        <TextField id="standard-basic"
        label="Min"
        type='number'
        InputProps={{ inputProps: { max: 60, min: 0, pattern: '[0-9]*'  }} }
        variant="standard"        
        sx={{ input: { color: "white", margin: "0 20px" } }}
        InputLabelProps={{ style: { color: "#fff", margin: "0 20px" } }}
        onChange={(event) => {mDuration.min=event.target.value}} />
      </div>
      
      <div>
        <div>
          <Typography sx={{ letterSpacing: '1px', color: "#AAA"}} variant="h6">Rating :</Typography>
        </div>
        <FormControl sx={{ m: 1, minWidth: 120, color:'white' }}>
        <InputLabel  id="demo-simple-select-helper-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={rating}
          label="Age"
          sx={{ color:'white' }}
          onChange={(event) => {
            SetRating(event.target.value)}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='UA'>UA</MenuItem>
          <MenuItem value='R-Rated'>R-Rated</MenuItem>
          <MenuItem value='PG-13'>PG-13</MenuItem>
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
      </div>

      {/* will print the inputfield for trailersNClips */}
      <div >
        <div>
        <Typography sx={{ letterSpacing: '1px',color: "#AAA"}} variant="h6">Trailers :</Typography>
        </div>
        {handleHowManyClips()}
      </div>
      

      <div className='addmovie-frombtn-grp'>
        <Button  variant="contained" onClick={()=>handleAddClipInput() } startIcon={<AddCircleOutlineIcon />}>Add Clip</Button>
        <Button  variant="contained" onClick={()=>handleRemoveClipInput()} color='warning' startIcon={<RemoveCircleTwoToneIcon />}>Remove Clip</Button>
      </div>
      
      <div className='addmovie-lanuages-container'>
        <div>
        <Typography sx={{ letterSpacing: '1px',color: "#AAA"}} variant="h6">Languages :</Typography>
        </div>
        <FormControlLabel control={<Checkbox onChange={()=>{handleLanguages('English')}} />} label="English" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleLanguages('Hindi')}} />} label="Hindi" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleLanguages('Marathi')}} />} label="Marathi" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleLanguages('Tamil')}} />} label="Tamil" />
      </div>

      <div className='addmovie-lanuages-container'>
        <div>
        <Typography sx={{ letterSpacing: '1px', color: "#AAA"}} variant="h6">Genre :</Typography>
        </div>
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Horror')}}  />} label="Horror" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Comedy')}}/>} label="Comedy" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Adventure')}} />} label="Adventure" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Superhero')}} />} label="Superhero" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Thriller')}} />} label="Thriller" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Drama')}} />} label="Drama" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Fantasy')}} />} label="Fantasy" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Historical')}} />} label="Historical" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Biography')}} />} label="Biography" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Sci-fi')}} />} label="Sci-fi" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleGenre('Animated')}} />} label="Animated" />
      </div>


      <div className='addmovie-lanuages-container'>
        <div>
        <Typography sx={{ letterSpacing: '1px', color: "#AAA"}} variant="h6">Format :</Typography>
        </div>
        <FormControlLabel control={<Checkbox onChange={()=>{handleFormat('2D')}} />} label="2D" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleFormat('3D')}} />} label="3D" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleFormat('IMAX')}} />} label="IMAX" />
        <FormControlLabel control={<Checkbox onChange={()=>{handleFormat('IMAX3D')}} />} label="IMAX3D" />
      </div>

     {/* will render the inputfield for castdetails */}
      <div>
        <div>
          <Typography sx={{ letterSpacing: '1px',color: "#AAA"}} variant="h6">Cast :</Typography>
        </div>
         {handleHowManyCast()}
      </div>

      <div className='addmovie-frombtn-grp'>
        <Button  variant="contained" onClick={()=>handleAddCastInput() } startIcon={<AddCircleOutlineIcon />}>Add Cast</Button>
        <Button  variant="contained" onClick={()=>handleRemoveCastInput()} color='warning' startIcon={<RemoveCircleTwoToneIcon /> }>Remove Cast</Button>
      </div>



      {/* will render the inputfield for Crew details */}
      <div>
        <div>
          <Typography sx={{ letterSpacing: '1px', color: "#AAA"}} variant="h6">Crew :</Typography>
        </div>
         {handleHowManyCrew()}
      </div>

      <div className='addmovie-frombtn-grp'>
        <Button  variant="contained" onClick={()=>handleAddCrewInput() }   startIcon={<AddCircleOutlineIcon />}>Add Crew</Button>
        <Button  variant="contained" onClick={()=>handleRemoveCrewInput()} color='warning' startIcon={<RemoveCircleTwoToneIcon />}>Remove Crew</Button>
      </div>


      <div>
        <div>
          <Typography sx={{ letterSpacing: '1px', color: "#AAA"}} variant="h6">Assign Theater and Shows :</Typography>
        </div>
         {handleHowManyTheater()}
      </div>

      <div className='addmovie-frombtn-grp'>
        <Button  variant="contained" onClick={()=>handleAddAssignedTheater() }   startIcon={<AddCircleOutlineIcon />}>Add Theater</Button>
        <Button  variant="contained" onClick={()=>handleRemoveAssignedTheater()} color='warning' startIcon={<RemoveCircleTwoToneIcon />}>Remove Theater</Button>
      </div>
          
      <Button  variant="contained" onClick={()=>handleSaveMovie()} color='success' startIcon={<SaveIcon/>}>Save</Button>
        </FormGroup>
      {/* <Button variant="outlined"
        onClick={//() => SetMovie([...movies,NewMovie]) 
          AddMovie}
      >Add</Button> */}
      </div>
    </div>

  );
}
