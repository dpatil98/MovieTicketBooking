import * as React from 'react';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import Button from '@mui/material/Button';
// import StickyHeadTable from './Dashboard';
import { useHistory } from 'react-router-dom';
import { API_URL } from '../../App';



import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export function Theaters() {

 const history = useHistory();
 

  const handleAddTheater = () => {

    history.push('./addtheater');
  
  };



  return (

    <div className='theater-container'>
      <div className='dashboard-section-headers'>
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
        <StickyHeadTable/>
      </div>
    </div>

  );

}



const columns = [
  { id: 'name', label: 'Theater\u00a0Name', minWidth: 170 },
  { id: 'City', label: 'City', minWidth: 100 },
  {
    id: 'Screens', 
    label: 'Screens',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  // {
  //   id: 'size',
  //   label: 'Size\u00a0(km\u00b2)',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toLocaleString('en-US'),
  // },
  // {
  //   id: 'density',
  //   label: 'Density',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toFixed(2),
  // },
];

function createData(name, City, Screens, size) {
  const density = Screens / size;
  return { name, City, Screens, size, density };
}



function StickyHeadTable() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [allTheaters, SetAllTheaters] = React.useState(""); 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  
  React.useEffect(async ()=>{
      
    // console.log("Getting Theaters");

    await fetch(`${API_URL}/theaters`,{
    method : "GET"  
    }).then((response) => response.json())
      .then(data => SetAllTheaters(data))
      .catch( (e) => console.log(e));
    
},[]);

console.log(allTheaters)
let rows=[];
if(allTheaters[0])
{
  rows = allTheaters.map(t =>createData(t.TheaterName, t.City , t.TotalScreens))
}



  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
console.log(rows)
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 , }}>
        <Table stickyHeader  aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , color:'white', background:'rgb(40, 40, 40)'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{ color:'white', background:'rgb(48, 48, 48)'}}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.City} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell style={{ color:'white',background:'rgb(48, 48, 48)'}} key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination  
        style={{ color:'white', background:'rgb(40, 40, 40)'}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
