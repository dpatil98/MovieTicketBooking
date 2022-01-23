
import React, { useState } from 'react';
import '../css/seatBooking.css';



const theater={
            "tname":"Smoeething",
            "totalS":"3",
            "S1":   {  
                        "totalrows":18,
                        "SeatsinRow":"23",
                        "totalSections":3,
                        "rows":[{
                                    "sectionStarts":"Balcony-Rs. 100.00",
                                    "cost":"100",
                                },
                                {
                                    
                                    "21":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                    "6":"notbooked" ,    
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                    "18":"notbooked" , 
                                    "19":"booked" ,
                                    "20":"notbooked" , 
                                    
                                },
                                {
                                    "sectionStarts":"Reserved-Rs. 80.00",
                                    "cost":"80",
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                    "21":"notbooked" ,
                                    "22":"notbooked" ,
                                    "23":"notbooked" , 
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                    "21":"notbooked" ,
                                    "22":"notbooked" ,
                                    "23":"notbooked" , 
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                    "21":"notbooked" ,
                                    "22":"notbooked" ,
                                    "23":"notbooked" , 
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                    "21":"notbooked" ,
                                    "22":"notbooked" ,
                                    "23":"notbooked" , 
                                },
                                {   
                                    
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                     
                                },
                                {   
                                    
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                     
                                },
                                {   
                                    
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                     
                                },
                                {   
                                    
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                     
                                },
                                {   
                                    
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                     
                                },
                                {   
                                    
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                     
                                },
                                {
                                    "emptyrow":"emptyRow"
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                    "21":"notbooked" ,
                                    "22":"notbooked" ,
                                    "23":"notbooked" , 
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                    "21":"notbooked" ,
                                    "22":"notbooked" ,
                                    "23":"notbooked" , 
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                    "21":"notbooked" ,
                                    "22":"notbooked" ,
                                    "23":"notbooked" , 
                                },
                                {
                                    "sectionStarts":"Balcony-Rs. 70.00",
                                    "cost":"70",
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                    "21":"notbooked" ,
                                    "22":"notbooked" ,
                                    "23":"notbooked" , 
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                     
                                    "19":"booked" ,
                                    "20":"notbooked" ,
                                    "21":"notbooked" ,
                                    "22":"notbooked" ,
                                    "23":"notbooked" , 
                                },
                                {   
                                    
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "5":"notbooked" , 
                                       
                                    "7":"booked" ,
                                    "8":"notbooked" , 
                                    "9":"booked" ,
                                    "10":"notbooked" , 
                                    "11":"notbooked" ,    
                                    "12":"booked" ,
                                    "13":"notbooked" , 
                                    "14":"booked" ,
                                    "15":"notbooked" , 
                                    "16":"notbooked" ,    
                                    "17":"booked" ,
                                    
                                },
                                
                                
                               ]
                    }
        };


//    let totalCost=0;     

export function ShowScreen(movies)  
{   
  
    
    
      
    const [SeatSelection ,setSeatSelection] = useState({0:true,});
    const [SelectedSeats ,setSelectedSeats] = useState(0);
    const [totalCost ,setTotalCost] = useState(0);

    console.log("State" , SeatSelection);
    // const sd = () =>{
    //     let sds=[];
    //     console.log("sd")
    //     for(let i=0;i<row;i++)
    //     {
    //         sds.push([]);
            
    //         for(let j=0;j<seats;j++)
    //         {
    //           sds[i][j]=<div className='seat'>{j}</div>  
    //         }
                   
    //     }
    //     return sds;
    // }
    
    const handleSelect=(SeatKey,cost)=>{
        
        // console.log( SeatSelection[`${SeatKey}`] );
        setSeatSelection( {...SeatSelection,  [SeatKey]:(!SeatSelection[`${SeatKey}`]) ? true : false } );
        
        if(!SeatSelection[`${SeatKey}`])
        {
         setTotalCost(totalCost+parseInt(cost.id) ) ;
         setSelectedSeats(SelectedSeats+1) ;
        
        }
        else
        { 
            setTotalCost(totalCost-parseInt(cost.id) )  ;
            setSelectedSeats(SelectedSeats-1) ;
        
        };
        
        // console.log("Seats",SelectedSeats);
        
    }

    // console.log("cost",totalCost);

    const ArrangeSeats = () =>{

        let EachRow=[];
        let RowName=64; //'A'-'Z' starts from 65 ..64 bcus first row is section name
        let Cost=null; //cost will vary per section

        let firstLoop=theater.S1.totalrows+theater.S1.totalSections;

        for(let i=0;i<firstLoop;i++)
        {
            //creting empty array to replaced by i..to avoid error
            EachRow.push([]);
            let SeatNo=0; //reset for every row


         try {
             
          
            for(let j=0;j<=theater.S1.SeatsinRow;j++)
            {
                if(theater.S1.rows[i]['emptyrow']) //to check if its emprt space 
                {
                    j=theater.S1.SeatsinRow;
                    RowName--;
                    
                }
                if(j===0)//to give row name like A, B, C 
                {
                    EachRow[i][j] = <div className='row-name' >{String.fromCharCode(RowName)}</div> ;
                    continue;
                }

                if(theater.S1.rows[i]['sectionStarts'])
                {
                    
                    EachRow[i]= <div className='seats-section' >{theater.S1.rows[i]['sectionStarts']}</div>
                   
                    Cost=theater.S1.rows[i]['cost']; //cost per seat for this section
                    
                    j=theater.S1.SeatsinRow;
                    RowName=64; //reseting row name for each section
                    continue;
                }
                
               if( theater.S1.rows[i][`${j}`]) //to check if its seat or emptyspace
               {    
                //    console.log("cost",Cost);
                    SeatNo++;
                    let bookedornot = theater.S1.rows[i][`${j}`];
                    let uniqueSeatNo =`${i}${j}`;
                    let seatStatus= (SeatSelection[`${uniqueSeatNo}`]) ? "selected-seat" :bookedornot;
                                            //giving classname directly as booked / notbooked
                    EachRow[i][j] = <div id={Cost} onClick={ (e) => handleSelect(`${uniqueSeatNo}` , e.target)  }  className={ seatStatus } >{SeatNo}</div>  
               }
               else{
                    EachRow[i][j]=<div className='empty'></div> 
               }
               
               


            }
            RowName++;
            } catch (error) {

                console.log(error);

            }        
        }
        return EachRow;
    }
   
    return(

        <div className='theater-container'>
            
            <div className='seat-info'>
                <hr/>
                <div><div className='booked' ></div><label>: Booked Seat</label></div>
                <br/>
                <div><div className='notbooked' ></div><label>: Available Seat</label></div>
                <br/>
                <div><div className='selected-seat' ></div><label>: Selected </label></div>
                <hr/>
            </div>
            <div className='seats-container'>
                    {ArrangeSeats().map((row ,i) => <div key={i} className='row'>
                                        {/* <p>{String.fromCharCode(65)}</p> */}
                                        {row}
                                    </div>   ) }


                                    
            </div>
            <div className='show-screen'>
                <p>All Eyes Here</p>
                <div  className='screen'></div>
                <p>Screen</p>
            </div>
            <div style={{display:(SelectedSeats>0)?"flex":"none"}} className='total-price'>
                <div >
                    <label>Selected Seats :</label> {SelectedSeats}
                </div>
                <div >
                 <label> Total Price : RS.</label> {totalCost}
                </div>
            </div>
        </div>
    );
}