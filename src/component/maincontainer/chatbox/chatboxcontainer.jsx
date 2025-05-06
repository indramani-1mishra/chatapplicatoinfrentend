import React, { useContext } from 'react'
import Context from '../../../context/formresultcontext'
import './chatbox.css'
import Sidebarleftpart from './sidebarleftpart/Sidebarleftpart';
import Sidebarright from './slidebarrightcomponent/Sidebarright';
import logo from './logo.png'
export default function Chatboxcontainer() {

  const {loggedin}= useContext(Context);
  console.log(loggedin);
  return (
    <div className='chatappcontainer1'> 
       {loggedin?<div className='chatappcontainer'>
       <div className='sidebar'>
          <Sidebarleftpart/>
          <Sidebarright/>
       </div>
       <div className='w-full border-2 border-red-500 bg-slate-100 flex justify-center items-center'>
          <div>
             <img src={logo} alt='image' />
          </div>
       </div>
       </div>:<div> user not created please try again </div>}
    </div>
  )
}
