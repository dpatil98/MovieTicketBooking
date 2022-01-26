import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export function AddScreen() {

    const [rows, setRows] = useState(1);
    const [MaxSpace, setMaxSpace] = useState(0);
    // const [rows, setRows] = useState([{"row":[]},]);
    const [Section, setSection] = useState([0]);
    const [seatSelection, setSeatSelection] = useState([]);
    const [rData ,setRData] = useState([{},]);
    // const [SelectedSeats ,setSelectedSeats] = useState(0);
    // const [No,setNO] =useState(0);/


    const Select = (SeatNo,ind) => 
    {
        console.log(SeatNo);
        // setSeatSelection([...seatSelection, SeatNo ]);
        // // setSeatSelection({...seatSelection,  [SeatNo]:!seatSelection[SeatNo] ?true:false  }) ;

        setSeatSelection({ ...seatSelection, [SeatNo]: (!seatSelection[`${SeatNo}`]) ? true : false });
        // setRData( [...rData, { [SeatNo]: (!seatSelection[`${SeatNo}`]) ? true : false  } ] )
        // setRData( [...rData, {} ] );

        rData.map( (data,index) => 
                        { if(index===ind){
                                {
                                    data[`${SeatNo}`]=(!data[`${SeatNo}`]) ? true : false;
                                    // console.log(dataN);
                                }

                        } 
        } ) ;

        // console.log("index", ind);
    };

    console.log("Seats", seatSelection );
    console.log("RData", rData );

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


    const handleData =(dataN,i,key) => 
    {
        rData.map( (data,index) => 
                        { if(index===i){
                                {
                                    data[`${key}`]=dataN;
                                    console.log(dataN);
                                }

                        } 
        } ) ;
        console.log("RData", rData );
    }


    const ArrangeSeats = () =>{

        let EachRow=[];


        let SectionIndex=0;
         
        for(let i=0;i<rows;i++)
        {
            //creting empty array to replaced by i..to avoid error
            EachRow.push([]);
            

            if( Section[SectionIndex]===i)
            {         
                EachRow[i][0] = <TextField id="standard-basic" onChange={(e)=>handleData(e.target.value,i,'SectionName')} key={i} label="Section Name" variant="standard" sx={{ input: { color: 'white' } }} InputLabelProps={{ style: { color: '#ddd', fontSize: '14px' } }} /> ;
                EachRow[i][1] = <TextField id="standard-basic"  onChange={(e)=>handleData(e.target.value,i,'Cost')} key={i+"a"} label="Cost" variant="standard" sx={{ input: { color: 'white' } }} InputLabelProps={{ style: { color: '#ddd', fontSize: '14px' } }} />
                SectionIndex++;
                
                continue;
            }

         try {
             
            for(let j=0;j<MaxSpace;j++)
            {


                    
                    let uniqueSeatNo =`${i}${j}`;
                    // let seatStatus= (seatSelection[`${uniqueSeatNo}`]) ? "selected-seat" :'screen-box';
                    let seatStatus= (rData[i][`${uniqueSeatNo}`]) ? "selected-seat" :'screen-box';                    
                                            //giving classname directly as booked / notbooked
                    EachRow[i][j] = <div key={j}  onClick={ () => Select(`${uniqueSeatNo}` ,i)  }  className={ seatStatus } ></div>  

            }
         
            } catch (error) {

                console.log(error);

            }        
        }
        // console.log(EachRow)
        return EachRow;
    }


    const handleAddRow=()=>
    {
        setRows(rows+1) ;
        setRData( [...rData, {} ] );
    }

    const handleRemoveRow=()=>
    {
        setRows(rows-1) ;
        setRData(rData.slice(0,-1) );
       
    }

    const handleAddSection=()=>
    {
       
        setSection([...Section ,rows]);
        setRows(rows+1); 
        setRData( [...rData, {} ] );
    }

    const handleRemoveSection=()=>
    {
       
        setSection(   Section.slice(0, -1) ); 
        setRows(rows-1); 
        setRData( rData.slice(0,-1) );
        
    }

    const handleSave= (a) =>
    {
     const  re= a.map((g) => g).map((s)=>s).map(sd=>sd);
        
        console.log(re);
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
             
                {/* <Button variant="contained" onClick={() => setRows(rows+1) }>Add-Row</Button> */}
                <Button variant="contained" onClick={() => handleAddRow() }>Add-Row</Button>

                {/* <Button variant="contained" onClick={() =>{ setSection([...Section ,rows]); setRows(rows+1) }  }>Add-Section</Button> */}
                <Button variant="contained" onClick={() => handleAddSection()   }>Add-Section</Button>

                {/* <Button variant="contained" onClick={() =>{ setRows(rows-1) }  }>Remove Recent Row</Button> */}
                <Button variant="contained" color='error' onClick={() => handleRemoveRow() }>Remove Recent Row</Button>

                <Button variant="contained" color='error' onClick={() => handleRemoveSection() }>Remove Recent Section</Button>
                
            </div>
            <div className='addScreen-btns-grp'>
                
                <Button variant="contained" onClick={() => handleSave( ArrangeSeats() )} color='success' >Save Screen</Button>
                
            </div>
            <div className='show-screen'>
                <p>All Eyes Here</p>
                <div className='screen'></div>
                <p>Screen</p>
            </div>
        </div>

    );
}
