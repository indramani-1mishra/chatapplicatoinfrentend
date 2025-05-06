import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import Context from '../../../../context/formresultcontext';
import { toast } from 'react-toastify';

export default function Verifyuser() {
 
    const {setloggedin} = useContext(Context);

    async function verifyuser()
    {
     const response = await axios.get('http://localhost:3001/api/v1/verify/user',{
        withCredentials:true,
     })
     console.log(response.data.success);
     toast.success(response.data.message);
     
     setloggedin(response.data.success)
    }
   

    useEffect(()=>
    {
      verifyuser();
    },[]);
 
}
