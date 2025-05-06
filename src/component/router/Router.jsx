import React, { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Createuser from '../maincontainer/auth/creatuser/Creatuser'
import Login from '../maincontainer/auth/loginuser/login'
import Context from '../../context/formresultcontext'
import Userprofile from '../maincontainer/profile/userprofile'
import Chatboxcontainer from '../maincontainer/chatbox/chatboxcontainer'

export default function Router() {
    const {loggedin}= useContext(Context);
  return (
    <>
      <Routes>
      <Route  path='/' element={<div>
          {loggedin? <Chatboxcontainer/> :<Createuser/>  } 
        </div>}/>
        <Route  path='/verify'element={<Chatboxcontainer/>}/>
        <Route path='/creatuser'element={<Createuser/>}/>
        <Route  path='/login' element= {loggedin ? <Userprofile/> : <Login/>}/>
        
      </Routes>
    </>
  )
}
