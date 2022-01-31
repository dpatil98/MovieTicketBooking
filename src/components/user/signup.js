
import '../../css/signup.css';

import { useFormik } from "formik";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import { API_URL } from "../../App";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function SignUp()
{   
    const history = useHistory();
    const [message ,setMessage] = useState([]);

    const formValidation =  yup.object({

        FirstName: yup.string().required("You Forgot To Write First Name😱"),
        LastName: yup.string().required("You Forgot To Write Last Name😱"),
        Email: yup.string().required("You Forgot To Write Email 🥺🥺"),
        Password : yup.string().required("You Forgot To put Password🥺")
                  .min(8,"Minimum length Should Be 8 😤")
                  .max(20,"Maximum length is 20 😅"),
      
        CPassword: yup.string().required("You Forgot To Confirm your Password🥺")
                  .min(8,"Minimum length Should Be 8 😤")
                  .max(20,"Maximum length is 20 😅")
                  .oneOf([yup.ref('Password'), null], 'Passwords must match')
      });

    const {handleSubmit , handleChange , handleBlur, values, errors, touched} = useFormik ({

        initialValues : {FirstName:"", LastName:"", Email:"", Password:"", CPassword:""},
        // validate : formValidation,
        validationSchema: formValidation,
        onSubmit : (values) =>{
                                console.log("OnSubmit",values);
                                registration(values);
                                
                              }
        
        });
    

        console.log(values);


    const registration = async (values) =>{


              console.log("Registering..",values);
             
              //key is not used while makin obj bcus both key and value name are same
              console.log(values);
              const result=  await  fetch(`${API_URL}/users/AddUser`,{
                  method : "POST",
                  body: JSON.stringify({firstName  :values.FirstName,
                                        lastName   :values.LastName,
                                        password   :values.Password,
                                        email       :values.Email,
                                       }),
                  headers :{
                    //   'x-auth-token' : `${cookie.token}`,
                    //   'x-auth-access' : `${cookie.user.access_lvl}`,
                    //   'x-auth-mode' : 'addUser',
                      'Content-Type' : 'application/json'
                  }
              
                  }).then(respone => respone.json() )
                  .catch( (e) => console.log(e));
                
        
                  
                  console.log(result.message);
                  console.log(result.status);
                  if(result.status==="200"){ window.location.reload(); alert("sucess") }

                  setMessage(`${result.message} 🤨`);

};
    

    return(

    <div className=" signupForm-container text-center">

      <div className="signupForm-heading">
        <div className='signupForm-heading-logo'><h1>LOGO</h1></div>
        <div className='signupForm-heading-title'>
            <PersonOutlineIcon fontSize='large'/><h2>Add User </h2>
        </div>
     
      </div>


      <form onSubmit={handleSubmit} className="signupfrom">

        <div >
        
        <TextField 
            name="FirstName"
            value={values.FirstName}
            label="First Name"
            color="success" 
            size='small'
            onChange={handleChange} 
            onBlur={handleBlur}
        />

         <div className="error-text">
            <div >
                {errors.FirstName && touched.FirstName && errors.FirstName}
            </div>
        </div>
   
        </div>
        

        <div >
            <TextField 
                name="LastName" 
                value={values.LastName}
                label="Last Name"
                color="success" 
                size='small'
                onChange={handleChange} 
                onBlur={handleBlur}
            />
            <div className="error-text" >
                <div >
                    {errors.LastName && touched.LastName && errors.LastName }
                </div>
            </div>      
        </div>
        
        
        <div >
            <TextField 
                name="Email"
                value={values.Email}
                label="Email"
                color="success" 
                size='small'
                onChange={handleChange} 
                onBlur={handleBlur}
            />
            <div className="error-text">
                <div >
                    { errors.Email && touched.Email && errors.Email }
                </div>
            </div>
        </div>

        

        <div >
            <TextField 
                name="Password"
                value={values.Password}
                label="Password"
                color="success" 
                size='small'
                onChange={handleChange} 
                onBlur={handleBlur}
                autoComplete="new-password"
                type="password"
            />
            <div className="error-text">
                <div >
                    {errors.Password && touched.Password && errors.Password }
                </div>
            </div> 
        </div>
      
        

        <div >
            <TextField 
                name="CPassword"
                value={values.CPassword} 
                label="Confirm-Password"
                color="success" 
                size='small'
                onChange={handleChange} 
                onBlur={handleBlur}
                autoComplete="new-password"
                type="password"
            />
            <div className="error-text">
                <div >
                    { errors.CPassword && touched.CPassword&& errors.CPassword }
                </div>
            </div>
        </div>

        

       <div className=" error-text">
                {message} 
        </div>

        <Button  type='Submit' name='submit' variant="contained">Sign Up</Button>

      </form>

    </div>

    );
}