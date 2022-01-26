import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export function AddScreen() {

    const [rows, setRows] = useState(1);
    const [MaxSpace, setMaxSpace] = useState(1);
    // const [rows, setRows] = useState([{"row":[]},]);
    const [Section, setSection] = useState([0]);
    const [seatSelection, setSeatSelection] = useState([0,]);

    // const [SelectedSeats ,setSelectedSeats] = useState(0);
    // const [No,setNO] =useState(0);/


    const Select = (SeatNo) => 
    {
        console.log(SeatNo);
        // setSeatSelection([...seatSelection, SeatNo ]);
        // // setSeatSelection({...seatSelection,  [SeatNo]:!seatSelection[SeatNo] ?true:false  }) ;
        setSeatSelection({ ...seatSelection, [SeatNo]: (!seatSelection[`${SeatNo}`]) ? true : false });
        // console.log("Seats", seatSelection );
    };

    console.log("Section", Section );

    // const handleAddRow = () => {
    //     let raow = [];

    //     //unique seat number combination of row and seatposition
    //     // let uniqueSeatNo;
    //     for (let i = 0; i < 10; i++) {
    //         //asignin uniqueSeano as local scope so it set new value to each div
    //         let uniqueSeatNo = `${RowNumber}${i}`;
    //         let seatStatus = (seatSelection[`${uniqueSeatNo}`]) ? "selected-seat" : "notbooked";
    //         raow.push(<div className={seatStatus}  onClick={() => Select(uniqueSeatNo)}></div>);
    //         console.log(uniqueSeatNo);
    //     }



    //     setRows([...rows, { row: raow }]);
    //     setRowNumber(RowNumber + 1);



    // };

   

    // const handleAddSection = () => {

    //     const section = [];
    //     section.push(<TextField id="standard-basic" label="Section Name" variant="standard" sx={{ input: { color: 'white' } }} InputLabelProps={{ style: { color: '#ddd', fontSize: '14px' } }} />,
    //         <TextField id="standard-basic" label="Cost" variant="standard" sx={{ input: { color: 'white' } }} InputLabelProps={{ style: { color: '#ddd', fontSize: '14px' } }} />);
    //     // console.log(rows[0].row['box']);
    //     setRows([...rows, { row: section }]);

    // };

    const ArrangeSeats = () =>{

        let EachRow=[];


        let SectionIndex=0;
         
        for(let i=0;i<rows;i++)
        {
            //creting empty array to replaced by i..to avoid error
            EachRow.push([]);
            

            if( Section[SectionIndex]===i)
            {         
                EachRow[i][0] = <TextField id="standard-basic" key={i} label="Section Name" variant="standard" sx={{ input: { color: 'white' } }} InputLabelProps={{ style: { color: '#ddd', fontSize: '14px' } }} /> ;
                EachRow[i][1] =<TextField id="standard-basic" key={i+"a"} label="Cost" variant="standard" sx={{ input: { color: 'white' } }} InputLabelProps={{ style: { color: '#ddd', fontSize: '14px' } }} />
                SectionIndex++;
                continue;
            }

         try {
             
            for(let j=0;j<=MaxSpace;j++)
            {


                    
                    let uniqueSeatNo =`${i}${j}`;
                    let seatStatus= (seatSelection[`${uniqueSeatNo}`]) ? "selected-seat" :'screen-box';
                                            //giving classname directly as booked / notbooked
                    EachRow[i][j] = <div key={j}  onClick={ (e) => Select(`${uniqueSeatNo}` , e.target)  }  className={ seatStatus } ></div>  

            }
         
            } catch (error) {

                console.log(error);

            }        
        }
        return EachRow;
    }


    return (
        <div className="add-screen-container">
            <div className='addScreen-Max-seats'>
                <br/>
                <TextField id="standard-basic" label="Max Seats in row(including walking Space)" onChange={(e)=>setMaxSpace(e.target.value)} type='number' variant="standard" sx={{ input: { color: 'white',width:'min(100vw,400px)', paddingLeft:'10px' } }} InputLabelProps={{ style: { color: '#ddd', fontSize: '14px', marginLeft:'20px' } }} />

            </div>
            <div>
                {/* {rows.map((row) =><div className='screen-rows'>{row.row}</div> )} */}
                {ArrangeSeats().map((row ,i) => <div key={i} className='screen-rows'>
                                        {/* <p>{String.fromCharCode(65)}</p> */}
                                        {row}
                                    </div>   ) }
            </div>
            <div className='addScreen-btns-grp'>
                {/* <Button onClick={() => handleAddRow()}>AddRow</Button> */}
                <Button variant="contained" onClick={() => setRows(rows+1) }>Add-Row</Button>
                {/* <Button onClick={() => handleAddSection()}>AddSection</Button> */}
                <Button variant="contained" onClick={() =>{ setSection([...Section ,rows]); setRows(rows+1) }  }>Add-Section</Button>
                <Button variant="contained" onClick={() =>{ setRows(rows-1) }  }>Remove Recent Row</Button>
                <Button variant="contained" onClick={() =>{ setSection(   Section.slice(0, -1) ); setRows(rows-1); }  }>Remove Recent Section</Button>
                {/* <Button onClick={() => Select(12)}>Add</Button> */}
            </div>
            <div className='addScreen-btns-grp'>
                
                <Button variant="contained" color='success' >Save Screen</Button>
                
                {/* <Button onClick={() => Select(12)}>Add</Button> */}
            </div>
            <div className='show-screen'>
                <p>All Eyes Here</p>
                <div className='screen'></div>
                <p>Screen</p>
            </div>
        </div>

    );
}
