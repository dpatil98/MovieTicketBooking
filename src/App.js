
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
import Login from './components/user/login.js';
import SignUp from './components/user/signup.js';




 export const API_URL="http://localhost:9000";


function App() {

  const [movies ,SetAllmovies]= React.useState([]);



 React.useEffect(async ()=>{
      
  console.log("Getting Theaters");

  await fetch(`${API_URL}/movies`,{
  method : "GET"  
  }).then((response) => response.json())
    .then(data => SetAllmovies(data))
    .catch( (e) => console.log(e));
 
},[]);

             

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
            <Route  path="/login">
              < Login/>
            </Route>
            <Route  path="/signup">
              < SignUp/>
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
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settings = [['Login','/login'],['SignUp','/signup'],['Admin Dashboard','/admin/movies']];

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
                  {/* <Typography textAlign="center">{page}</Typography>  */}
                  <Link  color="white" to={page[1]}>{page[0]}</Link>  {/* When navabar is minimized on small devices*/}
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
                  {/* <Typography textAlign="center">{setting}</Typography> */}
                  <Link  color="white" to={setting[1]}>{setting[0]}</Link>
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
