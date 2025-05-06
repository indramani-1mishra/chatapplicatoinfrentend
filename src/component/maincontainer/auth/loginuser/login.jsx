import React, { useContext, useState } from 'react'
import Submitmutform from '../../../reuseblecomponents/submitformreusble/submitmutform'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Context from '../../../../context/formresultcontext';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setId } from '../../../../redux/userdetails/userslice';

export default function Login() {
  const [email,setEmail1]=useState();
  const [password,setPassword1]=useState();
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const {setloggedin}= useContext(Context);
    const loginFields = [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'Enter email',
          className: 'input-email',
          onChange: (e) => setEmail1(e.target.value),
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
          className: 'input-password',
          onChange: (e) => setPassword1(e.target.value),
        },
      ];

      const handleSubmit = async (e) => {
       try
       {
        e.preventDefault();
        
      
        const response = await axios.post(
          'http://localhost:3001/api/v1/login',
          {
            email,
            password,
          },
          {
            withCredentials: true, // ✅ Correct key name and inside a config object
          }
        );
      
        if (response.data.success) {
            toast.success(response.data.message);
            console.log(response.data.id);
            const id = response.data.id;
          //  const name=response.data.name;
           // const imageurl=response.data.profileimage;
            localStorage.setItem("userid",JSON.stringify(id));
            dispatch(setId(id,));
            setloggedin(true);
            navigate('/');
          }
          else{
            toast.warn(response.data.message);
          }

       }
       catch(error){
             toast.error(error.message)
             
       }
      };
      

    
      
  return (
    <>
       <Submitmutform
        title="welcome to chat app"
        btntext="login"
         fields={loginFields}
         onSubmit={handleSubmit}
         ptext="have not account?"
         linkbtn="sign up"
         linkpath='/creatuser'
       />
    </>
  )
}
