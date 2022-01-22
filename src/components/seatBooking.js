
import '../css/seatBooking.css';


const theater={
            "tname":"Smoeething",
            "totalS":"3",
            "S1":   {  
                        "totalrows":"5",
                        "SeatsinRow":"30",
                        "rows":[{
                                    "0":"booked" ,
                                    "1":"notbooked" ,    
                                    "2":"booked" ,
                                    "3":"notbooked" , 
                                    "4":"booked" ,
                                    "8":"notbooked" , 
                                },
                                {   
                                    "0":"notbooked" ,
                                    "1":"booked" ,    
                                    "2":"notbooked" ,
                                    "9":"notbooked" , 
                                    "11":"booked" ,
                                    "12":"booked" , 
                                },
                                
                               ]
                    }
        };


        

console.log( theater.S1.rows[0]["12"] );

export function ShowScreen(movies)
{   
   

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

    const sd = () =>{
        let sds=[];
        console.log("sd")
        for(let i=0;i<theater.S1.totalrows;i++)
        {
            sds.push([]);
         try {
             
          
            for(let j=0;j<theater.S1.SeatsinRow;j++)
            {
               if( theater.S1.rows[i][`${j}`])
               {                    
                  sds[i][j]=<div className={theater.S1.rows[i][`${j}`]} >{j}</div>  
                  console.log("yes",theater.S1.rows[i][`${j}`]);
               }
               else{
                  sds[i][j]=<div className='empty'></div> 
               }
               
                 
            }
            } catch (error) {

                console.log(error);
                
            }        
        }
        return sds;
    }

    return(

        <div className='theater-container'>
            {sd().map(row => <div className='row'>
                                {row}
                            </div>   ) }
        </div>
    );
}