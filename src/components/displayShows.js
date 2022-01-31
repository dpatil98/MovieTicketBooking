
import '../css/displayShows.css';

import { useParams } from "react-router-dom";

import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';

import CameraOutdoorTwoToneIcon from '@mui/icons-material/CameraOutdoorTwoTone';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
import DirectionsCarFilledTwoToneIcon from '@mui/icons-material/DirectionsCarFilledTwoTone';
import BookOnlineTwoToneIcon from '@mui/icons-material/BookOnlineTwoTone';
import AccessibleTwoToneIcon from '@mui/icons-material/AccessibleTwoTone';
import { useHistory } from 'react-router-dom';

export function SelectingShow({movies})
{
    const { id } = useParams();
    const history =useHistory();
    

    const selectedMovie = movies.filter( (mv) => mv._id===id );
    console.log("selMovie: ",selectedMovie);
    let Genre =[];
    if(selectedMovie[0]){
     Genre =Object.keys(selectedMovie[0].genre).filter((g)=> selectedMovie[0].genre[g] );}
    // console.log("Genre: ",Genre);

    const SelectedTheaters=selectedMovie[0].assignedTheatersData.filter(t=>t.City==='Pune');
    console.log("Theaters",SelectedTheaters);

    const handleShowBooking =()=>{

        console.log("Handling show booking");

        // check if user logged in ot not
        history.push('/bookingScreen')

    }

   

    const handleHowManyTheaters=()=>{
        
  
    }

    return(

        <div >
            <div className="booking-movie-details">
                <div>
                    <div >
                        <h2>{selectedMovie[0].name}</h2> 
                    </div>
                    <div className="booking-movie-Subdetails">
                        <p>{selectedMovie[0].rating}</p>
                        {/* <p>💖 {selectedMovie[0].RTomatoes}%</p> */}
                        <p>{selectedMovie[0].mDuration.hr}hr:{selectedMovie[0].mDuration.min}Mins</p>
                        <p>{Genre.map((g,ind)=> (ind<Genre.length-1)?`${g}/`:g)}</p> 
                    </div>
                </div>
                <div>
                <h2>Pune</h2> 
                </div>
            </div>
            <div className="booking-movie-filter">
                <div >
                    <h2>Filter goes here</h2> 
                </div>
                
            </div>

            <div className='booking-shows-container'>
                
            {SelectedTheaters.map(({TheaterName,Shows})=> <HandleShows TheaterName={TheaterName} Shows={Shows}/>)}

                <div className='booking-theaterNshows'>
                    <div className='booking-theater'>
                       <div className='theater-name'>
                            <CameraOutdoorTwoToneIcon/> <h3>City Pride: Kothrud </h3>
                        </div> 
                       <div className='theater-availbl-facilities'>
                        <div>
                            <FastfoodTwoToneIcon  style={{ fontSize: 18 }}  titleAccess='Food & Beverages' />
                        </div>
                        <div>
                            <BookOnlineTwoToneIcon style={{ fontSize: 18 }} titleAccess='M-Ticket' fontsize='inherit'/> 
                        </div>
                        <div>
                            <DirectionsCarFilledTwoToneIcon style={{ fontSize: 18 }} titleAccess='Parking Available' fontsize='inherit'/> 
                        </div>
                        <div>
                            <AccessibleTwoToneIcon style={{ fontSize: 18 }} titleAccess='Wheel Chair Facility' fontsize='inherit'/>
                        </div>                         
                           
                       </div>
                       
                    </div>
                    <div className='booking-shows'>   
                            <Stack className='show-btn'>
                                <Badge badgeContent={ 

                                <div className='booking-show-info'>
                                    <div className='tri'></div>
                                    <div>
                                        <h4>Rs:200</h4>
                                        <p>Royal Sofa</p>
                                    </div>
                                    <div>
                                        <h4>Rs:180</h4>
                                        <p>Royal Gold</p>
                                    </div>
                                    <div>
                                        <h4>Rs:160</h4>
                                        <p>Royal Silver</p>
                                    </div>
                                    
                                </div>
                                                              
                                } 
                                >
                                    <button onClick={handleShowBooking}>Show1 </button>       
                                </Badge> 
                            </Stack> 
                        
                        <button>Show2</button>
                        <button>Show3</button>
                        <button>Show4</button>
                        <button>Show5</button>
                        
                    </div>
                </div>


            </div>

        </div>

    );

}



function HandleShows({ TheaterName,Shows})
{

    const history =useHistory();

    const handleShowBooking =()=>{

        console.log("Handling show booking");

        // check if user logged in ot not
        history.push('/bookingScreen')

    }

 

     return(
    <div className='booking-theaterNshows'>
        <div className='booking-theater'>
            <div className='theater-name'>
                <CameraOutdoorTwoToneIcon/> <h3>{TheaterName}</h3> 
            </div> 
            <div className='theater-availbl-facilities'>
                        <div>
                            <FastfoodTwoToneIcon  style={{ fontSize: 18 }}  titleAccess='Food & Beverages' />
                        </div>
                        <div>
                            <BookOnlineTwoToneIcon style={{ fontSize: 18 }} titleAccess='M-Ticket' fontsize='inherit'/> 
                        </div>
                        <div>
                            <DirectionsCarFilledTwoToneIcon style={{ fontSize: 18 }} titleAccess='Parking Available' fontsize='inherit'/> 
                        </div>
                        <div>
                            <AccessibleTwoToneIcon style={{ fontSize: 18 }} titleAccess='Wheel Chair Facility' fontsize='inherit'/>
                        </div>                         
                           
                       </div>                  
        </div>
        <div className='booking-shows'> 
        {Shows.map((Sh,ind)=>
            
            //Show btn which indicated timing and sectionname and cost 
            <Stack className='show-btn'>
                                <Badge badgeContent={ 

                                <div className='booking-show-info'>
                                    <div className='tri'></div>
                                   {/* {Sh.ScreenStructure.Rows.map(r=>
                                   <div>
                                        <h4>{r.Cost}</h4>
                                        <p>{r.SectionName}</p>
                                    </div>) }  */}

                                    {/* filterting Screen rows to get cost and section name  */}
                                    {Sh.ScreenStructure.Rows.map(ar=>ar).filter(sr=>sr.SectionName).map(r=> <div>
                                        <h4>RS: {r.Cost}</h4>
                                        <p>{r.SectionName}</p>
                                    </div>) } 
                                </div>
                                                              
                                } 
                                >
                                    <button onClick={()=>{handleShowBooking()}}>{Sh[`show${ind+1}`]}</button>       
                                </Badge> 
            </Stack>

            )}        
        </div>
        
    </div>
     );
}