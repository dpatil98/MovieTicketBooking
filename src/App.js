
import './App.css';
import './css/movieBox.css';


import { Link, Route, Switch } from 'react-router-dom';

import {Home} from './components/home.js'




import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';



import { MovieDetails } from './components/movieDetails.js';
import { Allmovies } from './components/allMovies.js';
import { SelectingShow } from './components/displayShows.js';
import {ShowScreen} from './components/seatBooking.js';
import { Dashboard } from './components/Admin/Dashboard';




 export const API_URL="http://localhost:9000";


function App() {


  const movies=[{ "id": "100", 
                "trailerAndClips": [{"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 1"},
                                    {"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 2"},
                                    {"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 3 Smoe Longggggg TitleName for testing"}], 
                "name": "The Shawshank Redemption", 
                "poster": "https://rukminim1.flixcart.com/image/416/416/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=70", 
                "summary": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", 
                "rating": 9.3 ,
                "casts":[ {"ActorName":"Smothing1","InMovieName":"InMovieName1","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing2","InMovieName":"InMovieName2","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} ,
                          {"ActorName":"Smothing3","InMovieName":"InMovieName3","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}
                        ],
                "crew":[ 
                        {"CrewName":"Crew1","CrewContribution":"Contri1","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                        {"CrewName":"Crew2","CrewContribution":"Contri2","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} ,
                        {"CrewName":"Crew3","CrewContribution":"Contri3","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                        {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                        {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                        {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                        {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                        {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                        {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                      ],
                }, 

              { "id": "101", 
              "trailerAndClips": [{"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 1"},
                                  {"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 2"},
                                  {"link":"https://www.youtube.com/embed/6hB3S9bIaco","title":"Trailer 3 Smoe Longggggg TitleName for testing"}], 
                "name": "The Godfather", 
                "poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", 
                "summary": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.", 
                "rating": 9.2 ,
                "casts":[ {"ActorName":"Smothing1","InMovieName":"InMovieName1","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing2","InMovieName":"InMovieName2","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} ,
                          {"ActorName":"Smothing3","InMovieName":"InMovieName3","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"ActorName":"Smothing4","InMovieName":"InMovieName4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}
                        ],
                        "crew":[ 
                          {"CrewName":"Crew1","CrewContribution":"Contri1","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"CrewName":"Crew2","CrewContribution":"Contri2","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} ,
                          {"CrewName":"Crew3","CrewContribution":"Contri3","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                          {"CrewName":"Crew4","CrewContribution":"Contri4","profilePic":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},
                        ],       
                
                        
              }, 
                
                { "id": "102", 
                  "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY", 
                  "name": "The Dark Knight",  
                  "poster": "https://images-na.ssl-images-amazon.com/images/I/91ebheNmoUL._RI_.jpg", 
                  "summary": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", 
                  "rating": 9 }, 
                  
                  { "id": "103", "trailer": "https://www.youtube.com/embed/Z4Ym5vBfk50", 
                  "name": "12 Angry Men", "poster": "https://rukminim1.flixcart.com/image/416/416/poster/r/z/2/posterskart-12-angry-men-movie-poster-pkam01-medium-original-imaebcrte6yza6et.jpeg?q=70", 
                  "summary": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.", 
                  "rating": 9 }, 

                  { "id": "104", 
                  "trailer": "https://www.youtube.com/embed/mxphAlJID9U", 
                  "name": "Schindler's List", 
                  "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBcGN-RmEzgO8Py18RXrEo3HtmKLsX2NnpA&usqp=CAU", 
                  "summary": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", 
                  "rating": 8.9 }, 
                  
                  { "id": "105", 
                  "trailer": "https://www.youtube.com/embed/r5X-hFf6Bwo", 
                  "name": "The Lord of the Rings: The Return of the King", 
                  "poster": "https://sm.ign.com/ign_ap/screenshot/default/the-lord-of-the-rings-the-return-of-the-king-59b7d7a3775bf_dhkf.jpg", 
                  "summary": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", 
                  "rating": 8.9 }];

             

  return (
    <div className="App">
      
      {/* <Navbar/> */}
      <ResponsiveAppBar/>
      
      
      <React.Fragment>
          {/* <CssBaseline /> */}
          <Container className='mainbody-container'>
              
          <Switch>      
            <Route exact path="/">
              {/* < Dashboard/> */}
              <Home movies={movies} />
            </Route>
            <Route exact path="/upcomingmovies">
            <Homea/>
            </Route>     
            <Route exact path="/movieDetails/:id">
              < MovieDetails movies={movies} />
            </Route>
            <Route exact path="/allMovies">
              < Allmovies movies={movies}/>
            </Route>
            <Route exact path="/BookingShow/:id">
              < SelectingShow movies={movies}/>
            </Route>
            <Route exact path="/bookingScreen">
              < ShowScreen movies={movies}/>
            </Route>
            <Route  path="/admin">
              < Dashboard/>
            </Route>
            <Route Path="**">
                    404 NOT FOUND
            </Route>
          </Switch>

      </Container>
    </React.Fragment>

    
    </div>
  );
}

// function Navbar()
// {
//   return(
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/upcomingmovies">Upcoming Movies</Link>
//       </nav>
//     </div>
//   );
// }


  
function Homea()
{

  return(

      <div>
        <h1>Hello AAAA</h1>
      </div>
    
      );

}

const pages = [['Home','/'], ['Upcoming Movies','/upcomingmovies'], ['News','/news']];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link  color="white" to={page[1]}>{page[0]}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default App;
