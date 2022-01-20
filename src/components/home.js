import '../css/home.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as React from 'react';
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';
import { MovieBox } from './miniCompo/MovieBox';




export function Home( {movies} )
{
  const [width, setWidth ] = useState(window.innerWidth); 


  //to change the width 
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });


  const AcordingToScreen = () =>{

 
    if(width <= 500 )
    {
      return 1;
    }
    else if(width<=900 && width >= 500)
    {
      return 2;
    }
    else if(width >= 901)
    {
      return 4;
    }
  }
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: AcordingToScreen(),
    slidesToScroll: AcordingToScreen()
  };


  return(
    // <React.Fragment>
    //       {/* <CssBaseline /> */}
    //       <Container className='homepage-container'>
            <div>
              <div className='slide-header'><h2>Recommended Movies :</h2>
                  <Link to="/allMovies">See All</Link>
              </div>
              <div >
                <Slider className="movies-container" {...settings}>
                {movies.map(({ trailer, poster, name, rating, summary, id }) => (<MovieBox  
                  
                  trailer={trailer}
                  poster={poster}
                  name={name}
                  rating={rating}
                  summary={summary} 
                  id={id}
                  />
                ))}
                </Slider>
              </div>
              </div>
    //       </Container>
    // </React.Fragment>
    );
}


