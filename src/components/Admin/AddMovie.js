import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router';


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


export function AddMovieBox() {
 

  const history =useHistory();

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

  console.log("tailer: ",trailer);
  console.log("Cast: ",castData);
  console.log("Crew: ",crewData);
  console.log("Lang",languages);
  console.log("Genre",genre);
  console.log("Formate",format);

  const AddMovie = () => {


    const NewMovie = { trailer, name, poster, summary, rating };
    //key is not used while makin obj bcus both key and value name are same
    // console.log(NewMovie);
    //     fetch("https://616d44bb37f997001745d948.mockapi.io/movies",{
    //     method : "POST",
    //     body: JSON.stringify(NewMovie),
    //     headers :{
    //         'Content-Type' : 'application/json'
    //     }
    
    //     }).then(() => history.push("/Movies"));

   
  
  };


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
      <div key={'trailer'+i}>

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

  return (

    <div className="AddMovie-container ">

      <div className='dashboard-section-headers'>
          <div>
              <Typography className='container-title' sx={{ letterSpacing: '1px', fontWeight: '300' }} variant="h4"><LocalMoviesTwoToneIcon /> Add Movie :</Typography>
          </div>
          <div>
            <Button  variant="contained" startIcon={<AddCircleOutlineIcon />}>Save</Button>
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
          
        </FormGroup>
      {/* <Button variant="outlined"
        onClick={//() => SetMovie([...movies,NewMovie]) 
          AddMovie}
      >Add</Button> */}
      </div>
    </div>

  );
}
