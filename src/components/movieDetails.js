
import '../css/movieDetails.css';

import { useParams } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// import Container from '@mui/material/Container';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export function MovieDetails({movies})
{
    // console.log("Details",trailer ,poster,name,rating,summary,id);
     const { id } = useParams();

     const [width, setWidth ] = useState(window.innerWidth);

     //to change the width 
     useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleResize);
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        });

     // console.log(width);
     const selectedMovie = movies.filter( (mv) => mv.id===id );
        
     const AcordingToScreen = (which) =>{

          
         
          if(which==="cast")
          {
               if(width <= 500 )
               {
               return 2;
               }
               else if(width<=900 && width >= 500)
               {
               return 4;
               }
               else if(width >= 901)
               {
               return 6;
               }
          }     
          else if(which==='trailer')
          {

               if(width <= 550 )
               {
               return 1;
               }
               else if(width<=900 && width >= 550)
               {
               return 2;
               }
               else if(width >= 901)
               {
               return 3;
               }
          }

        }
        

        var settings = {
          dots: true,
          infinite: false,
          speed: 700,
          slidesToShow:  AcordingToScreen('cast'),
          slidesToScroll:  AcordingToScreen('cast')
        };
      
        var TrailerSettings = {
          dots: true,
          infinite: false,
          speed: 700,
          slidesToShow: AcordingToScreen('trailer'),
          slidesToScroll:  AcordingToScreen('trailer')
        };

     const handleBookclick=()=>{
          console.log("Booking");
     }

   return(

        
     // <React.Fragment>
     // {/* <CssBaseline /> */}
     // <Container >
    
         <div className="movieDetails-container">
          <div className='movie-card'> 
               <div className='movieDetail-poster'>
                    <img src={selectedMovie[0].poster} alt='movie-poster' />
               </div>
               <div className='movieDetail-details'>
                    <h5>{selectedMovie[0].name}</h5>
                    <p>Comady / Horror </p>
                    <p>R-Rated</p>
                    <p>{selectedMovie[0].rating}</p>
                    <button onClick={()=> handleBookclick() } className='book-btn'><LocalActivityIcon fontSize='inherit' /> Book Now</button>
               </div>
          </div>
          <div className='movieSubDetails-container'>
               <div className="movieOverview-container">
                    <h3 className='section-heading' >Movie Overview : </h3>
                    <p>{selectedMovie[0].summary}</p>
               </div>

               <div className="movieTrailers-container">
                    <h3 className='section-heading'>Trailers and Clips : </h3>
                    <Slider  {...TrailerSettings}>
                    {selectedMovie[0].trailerAndClips.map(({ link, title }) => (<MovieTrailerAndClips 
                    
                    link ={link}
                    title ={title}  

                    />
                    ))}
                    </Slider>
               </div>

               <div className="casts-container">
                    <h3 className='section-heading'>Casts : </h3>
                    <Slider  {...settings }>
                    {selectedMovie[0].casts.map(({ ActorName ,InMovieName ,profilePic }) => (<MovieSubDetails  
                    
                    ActorName ={ActorName}
                    InMovieName ={InMovieName}
                    profilePic={profilePic}
               
                    />
                    ))}
                    </Slider>
               </div>

               <div className="casts-container"> {/* same classname to imlement same design */}
                    <h3 className='section-heading'>Crew : </h3>
                    <Slider  {...settings}>
                    {selectedMovie[0].crew.map(({ CrewName ,CrewContribution ,profilePic }) => (<MovieSubDetails  
                    
                    ActorName ={CrewName}
                    InMovieName ={CrewContribution}
                    profilePic={profilePic}
               
                    />
                    ))}
                    </Slider>
               </div>

               <div className="reviews-container"> {/* same classname to imlement same design */}
                    <h3 className='section-heading'>Top Reviews : </h3>
                    <Slider  {...TrailerSettings}>
                    {selectedMovie[0].crew.map(() => (< MovieReviews />
                    ))}
                    </Slider>
               </div>
          </div>     
        </div>);
     {/* </Container>
</React.Fragment> */}

   

    
}

function MovieSubDetails({ ActorName ,InMovieName ,profilePic })
{
     return(
          <div className='cast-info' >              
               <img src={profilePic} alt='cast-profilePic' />
               <h5>{ActorName}</h5>
               <p>As</p>
               <h6>{InMovieName}</h6>
          </div>
     );
}

function MovieTrailerAndClips({link ,title })
{
     return(
          <div className='trailerAndClips-card' >              
               <iframe src={link} alt='movie-trailer' />
               <h5>{title}</h5>
          </div>
     );
}

function MovieReviews()
{
     return(
          <div className='review-card' >   
               <div className='review-date'>
                    <p>19/01/2022</p>   
               </div>           
               <div className='review-user'>
                    <img  src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' alt='user-profilePic'/>
                    <p>user Name</p>     
               </div> 
               <hr/>
               <div className='review-rating'>
                    <p>😀😁😂🤣😃</p>
               </div>
              
               <div className='review'>
                    <p>lorem asda dasdad refd weos  qoss oei qiiq jfkdsl kakf lljjd afsnlfdf sdfnlnf i ndsn ijf klfall fadj jfndln </p>
               </div>
          </div>
     );
}