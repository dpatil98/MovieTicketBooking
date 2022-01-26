import * as React from 'react';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import Button from '@mui/material/Button';
import StickyHeadTable from './Dashboard';
import { useHistory } from 'react-router-dom';


export function Theaters() {

 const history = useHistory();

  const handleAddTheater = () => {
   history.push('./addtheater');
  };

  return (

    <div className='theater-container'>
      <div className='theater-headers'>
        <div>
          <Typography className='container-title' sx={{ letterSpacing: '1px', fontWeight: '300' }} variant="h4"><CameraOutdoorIcon /> Theaters</Typography>
        </div>
        <div>
          <Button onClick={() => { handleAddTheater() }} variant="contained" startIcon={<AddCircleOutlineIcon />}>
            Add Theater
          </Button>
        </div>
      </div>
      <div>
        <StickyHeadTable />
      </div>
    </div>

  );

}
