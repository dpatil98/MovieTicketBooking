
import '../../css/signup.css';
// import '../../css/login.css';

import { useFormik } from "formik";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import { API_URL } from "../../App";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Login()
{   
    const history = useHistory();
    const [message ,setMessage] = useState([]);

    const formValidation =  yup.object({

        Email: yup.string().required("You Forgot To Write Email 🥺🥺"),
        Password : yup.string().required("You Forgot To put Password🥺")
                  .min(8,"Minimum length Should Be 8 😤")
                  .max(20,"Maximum length is 20 😅"),
  
      });

    const {handleSubmit , handleChange , handleBlur, values, errors, touched} = useFormik ({

        initialValues : {Email:"", Password:""},
        // validate : formValidation,
        validationSchema: formValidation,
        onSubmit : (values) =>{
                                console.log("OnSubmit",values);
                                checkLogin(values);
                                
                              }
        
        });
    

        console.log(values);


    const checkLogin = async (values) =>{


        console.log("Logging In",values);
  
      
        let re= await fetch(`${API_URL}/users/login`,{
            method : "POST",
            body: JSON.stringify({
                                  password   :values.Password,                          
                                  email       :values.Email,
                                }),
            headers :{
                'Content-Type' : 'application/json'
            }
        
            }).then((response) => response.json())
            .catch( (e) => console.log(e));
                    
            console.log("re",re.token);
  
            if(re.token && re.user)
                {
                //   setCookie("user",re.user ,{maxAge: 3600}); //in sec //3600=1hr
                //   setCookie("token", re.token ,{maxAge: 3600});
                  // localStorage.setItem("token", re.token);
                  re=null; //re null bcus it was assigning user cookie even after logout
                //   history.push('/Dashboard/Leads');  
                //   console.log("Cookies",cookies.user);         
                }
            else{
                  
                setMessage(`${re.message} 🤨`);
            } 

};
    

    return(

    <div className=" signupForm-container text-center">

      <div className="signupForm-heading">
        <div className='signupForm-heading-logo'><h1>LOGO</h1></div>
        <div className='signupForm-heading-title'>
            <PersonOutlineIcon fontSize='large'/><h2>LOG IN </h2>
        </div>
     
      </div>


      <form onSubmit={handleSubmit} className="signupfrom">

           
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
      

       <div className=" error-text">
                {message} 
        </div>

        <Button  type='Submit' name='submit' variant="contained">Log IN</Button>

      </form>

    </div>

    );
}