import React, { useContext, useState } from 'react'
import Submitmutform from '../../../reuseblecomponents/submitformreusble/submitmutform'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Context from '../../../../context/formresultcontext';

export default function Login() {
  const [email,setEmail1]=useState();
  const [password,setPassword1]=useState();
  const navigate = useNavigate();
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
        e.preventDefault();
        console.log(email, password + " accepted");
      
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
            alert("loging successfully");
            setloggedin(true);
            navigate('/');
          }
          else{
            alert("try again")
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
