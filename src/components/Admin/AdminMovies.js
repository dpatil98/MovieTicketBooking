import { MovieBox } from "../miniCompo/MovieBox";
import '../../css/AdminCss/adminMovies.css';
import{API_URL} from '../../App.js'


import { FilterForMobiles } from "../miniCompo/filter_mobile.js";
import  FilterForPC  from "../miniCompo/filter_PC.js";
import { useEffect, useState } from "react";


import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalMoviesTwoToneIcon from '@mui/icons-material/LocalMoviesTwoTone';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export function AdminMovies()
{ 
    const [movies ,SetAllmovies] = useState([]);

    const history = useHistory();

    // const movies=[
    //   { "id": "100", 
    //             "trailerAndClips": [{"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 1"},
    //                                 {"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 2"},
    //                                 {"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 3 Smoe Longggggg TitleName for testing"}], 
    //             "name": "The Shawshank Redemption", 
    //             "poster": "https://rukminim1.flixcart.com/image/416/416/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=70", 
    //             "summary": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", 
    //             "rating": 9.3 ,
    //             "casts":[ {"ActorName":"Smothing1","InMovieName":"InMovieName1","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing2","InMovieName":"InMovieName2","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} ,
    //                       {"ActorName":"Smothing3","InMovieName":"InMovieName3","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}
    //                     ],
    //             "crew":[ 
    //                     {"CrewName":"Crew1","CrewContribution":"Contri1","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                     {"CrewName":"Crew2","CrewContribution":"Contri2","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} ,
    //                     {"CrewName":"Crew3","CrewContribution":"Contri3","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                     {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                     {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                     {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                     {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                     {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                     {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                   ],
    //             }, 

    //           { "id": "101", 
    //           "trailerAndClips": [{"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 1"},
    //                               {"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 2"},
    //                               {"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 3 Smoe Longggggg TitleName for testing"}], 
    //             "name": "The Godfather", 
    //             "poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", 
    //             "summary": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.", 
    //             "rating": 9.2 ,
    //             "casts":[ {"ActorName":"Smothing1","InMovieName":"InMovieName1","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing2","InMovieName":"InMovieName2","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} ,
    //                       {"ActorName":"Smothing3","InMovieName":"InMovieName3","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}
    //                     ],
    //                     "crew":[ 
    //                       {"CrewName":"Crew1","CrewContribution":"Contri1","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"CrewName":"Crew2","CrewContribution":"Contri2","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} ,
    //                       {"CrewName":"Crew3","CrewContribution":"Contri3","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                       {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
    //                     ],       
                
                        
    //           }, 
                
    //             { "id": "102", 
    //               "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY", 
    //               "name": "The Dark Knight",  
    //               "poster": "https://images-na.ssl-images-amazon.com/images/I/91ebheNmoUL._RI_.jpg", 
    //               "summary": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", 
    //               "rating": 9 }, 
                  
    //               { "id": "103", "trailer": "https://www.youtube.com/embed/Z4Ym5vBfk50", 
    //               "name": "12 Angry Men", "poster": "https://rukminim1.flixcart.com/image/416/416/poster/r/z/2/posterskart-12-angry-men-movie-poster-pkam01-medium-original-imaebcrte6yza6et.jpeg?q=70", 
    //               "summary": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.", 
    //               "rating": 9 }, 

    //               { "id": "104", 
    //               "trailer": "https://www.youtube.com/embed/mxphAlJID9U", 
    //               "name": "Schindler's List", 
    //               "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBcGN-RmEzgO8Py18RXrEo3HtmKLsX2NnpA&usqp=CAU", 
    //               "summary": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", 
    //               "rating": 8.9 }, 
                  
    //               { "id": "105", 
    //               "trailer": "https://www.youtube.com/embed/r5X-hFf6Bwo", 
    //               "name": "The Lord of the Rings: The Return of the King", 
    //               "poster": "https://sm.ign.com/ign_ap/screenshot/default/the-lord-of-the-rings-the-return-of-the-king-59b7d7a3775bf_dhkf.jpg", 
    //               "summary": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", 
    //               "rating": 8.9 }];

  useEffect(async ()=>{
      
      console.log("Getting Theaters");

      await fetch(`${API_URL}/movies`,{
      method : "GET"  
      }).then((response) => response.json())
        .then(data => SetAllmovies(data))
        .catch( (e) => console.log(e));
     
  },[]);

   console.log('Movies', movies)

    const [DeviceWidth ,setDeviceWidth] = useState(window.innerWidth);
     //to change the width 
    useEffect(() => {
      const handleResize = () => setDeviceWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });

  const handleAddmovie=()=>{
      console.log("adding Movie");
      history.push('./addmovie');
  }

    return(
          <div >

            <div className='dashboard-section-headers'>
                <div>
                    <Typography className='container-title' sx={{ letterSpacing: '1px', fontWeight: '300' }} variant="h4"><LocalMoviesTwoToneIcon /> All Movies in DB :</Typography>
                </div>
                <div>
                <Button onClick={() => { handleAddmovie() }} variant="contained" startIcon={<AddCircleOutlineIcon />}>
                   Add Movie
                </Button>
                </div>
            </div>   

            {(DeviceWidth>=769)? <FilterForPC /> :<FilterForMobiles/>} 
            
            <div className="allmovies-container" >
                {movies.map(({poster, name, rating, summary, _id ,RTomatoes,genre }) => (<MovieBox  
                  
                  poster={poster}
                  name={name}
                  rating={rating}
                  summary={summary} 
                  id={_id}
                  RTomatoes={RTomatoes}
                  genre={genre}
                  />
                ))} 
            </div>
            
          </div>    

    );

}