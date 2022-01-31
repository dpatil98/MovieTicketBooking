
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import '../../css/AdminCss/dashboard.css';


import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { positions } from '@mui/system';




import { AddTheater } from './AddTheater';
import { Theaters } from './Theaters';
import { AdminMovies } from './AdminMovies';
import { AddMovieBox } from './AddMovie';


export function Dashboard()
{

    return(

        <div className="dashboard-container">
          <MiniDrawer />
          <Switch>      
            <Route exact path="/admin/theaters">
                <Theaters />
            </Route> 
            <Route exact path="/admin/addtheater">
                <AddTheater />
            </Route>
            <Route exact path="/admin/movies">
                <AdminMovies />
            </Route>    
            <Route exact path="/admin/addmovie">
                <AddMovieBox/>
            </Route>
            <Route Path="**">
                    404 NOT FOUND
            </Route>
          </Switch>
          
        </div>

    );

}




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  [theme.breakpoints.down('md')]: {  
    // height:'max-content',
    marginTop:'65px',
  },
  marginTop:'70px',
  overflowX: 'hidden',
  background:'rgb(50,50,50)',
  color:'white',
  
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.down('lg')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    // display:'none',
    height:'max-content',
    marginTop:'65px',

  },
  marginTop:'70px',
  
  background:'rgb(50,50,50)',
  color:'white',

});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
   ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    
  }), 
);



export function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 const history =useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

 const handleDrawerClose = () => {
    setOpen(false);
  };

 
  return (
    
      
      <Drawer variant="permanent"  open={open}>
       <DrawerHeader > 
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{    
                margin:'auto',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
            </IconButton>
        
            <IconButton onClick={handleDrawerClose}
          sx={{  
            ...(!open && { display: 'none' }),
          }}
          >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>

        </DrawerHeader>
        <Divider />
        <List sx={{display:(open || window.innerWidth>=1280)?'block':'none'}}>
          {[['Movies','./movies'], ['Theater','./theaters'], ['Admins','./admins'], ['Users','./users']].map((text, index) => (
            <ListItem button  onClick={()=>{ history.replace(text[1]) }} key={text[0]}>
              <ListItemIcon >
                {index % 2 === 0 ? <InboxIcon color='inherit' /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text[0]} />
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </Drawer>

     
  );
}







