
import { useState } from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export  default function FiltetForPc(){

    const [isLanguage,setIsLanguage] = useState(false);
    const [isFormat,setIsFormat] = useState(false);
    const [isGenre,setIsGenre] = useState(false);

    return(

      
            <section >
             
             <h3 className='section-heading '>Filter : </h3>
             <div className="filter-container">
               <div className="filter-section">
                 <h5 onClick={()=>setIsLanguage(!isLanguage)}  >Language <ArrowForwardIosIcon fontSize='inherit' /> </h5>
                 <div style={{ display: (isLanguage)?'flex':'none'}} >
                 <p>English</p>
                 <p>Hindi</p>
                 <p>Marathi</p>
                 <p>Malayalam</p>
                 <p>Punjabi</p>
                 <p>Telgu</p>
                 </div>
               </div>
               <div className="filter-section">
                 <h5 onClick={()=> setIsFormat(!isFormat)} >Format <ArrowForwardIosIcon fontSize='inherit' /> </h5>
                 <div style={{ display: (isFormat)?'flex':'none'}}>    
                 <p>2D</p>
                 <p>3D</p>
                 <p>IMAX 2D</p>
                 <p>IMAX 3D</p>
                 </div>
                 </div>
               <div className="filter-section">
                 <h5 onClick={()=> setIsGenre(!isGenre)} >Genres <ArrowForwardIosIcon fontSize='inherit' /> </h5>
                 <div style={{ display: (isGenre)?'flex':'none'}}>
                 <p>Drama</p>
                 <p>Comedy</p>
                 <p>Action</p>
                 <p>Romantic</p>
                 <p>Thriller</p>
                 <p>Adventure</p>
                 <p>Crime</p>
                 <p>Family</p>
                 <p>Fantasy</p>
                 <p>Sci-Fi</p>
                 <p>Sports</p>
                 </div>
               </div>
             </div>
             
             <hr/>
           </section>  
        

    );
}