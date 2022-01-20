import { MovieBox } from "./miniCompo/MovieBox";
import '../css/allMovies.css';



import { FilterForMobiles } from "./miniCompo/filter_mobile.js";
import  FilterForPC  from "./miniCompo/filter_PC.js";
import { useEffect, useState } from "react";

export function Allmovies({movies})
{
    const [DeviceWidth ,setDeviceWidth] = useState(window.innerWidth);
     //to change the width 
    useEffect(() => {
      const handleResize = () => setDeviceWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });

  

    return(
          <div >
            

            <div >
              <h3 className='section-heading'>Available Movies in PUNE : </h3>
              <br/>         
            </div>
            {(DeviceWidth>=769)? <FilterForPC /> :<FilterForMobiles/>} 
            
            <div className="allmovies-container" >
                {movies.map(({ trailer, poster, name, rating, summary, id }) => (<MovieBox  
                  
                  trailer={trailer}
                  poster={poster}
                  name={name}
                  rating={rating}
                  summary={summary} 
                  id={id}
                  />
                ))} 
            </div>
            
          </div>    

    );

}