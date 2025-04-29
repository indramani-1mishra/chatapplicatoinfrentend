import React, { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import T from '../maincontainer/temporoy/T'
import Createuser from '../maincontainer/auth/creatuser/Creatuser'
import Login from '../maincontainer/auth/loginuser/login'
import Context from '../../context/formresultcontext'

export default function Router() {
    const {loggedin}= useContext(Context);
  return (
    <>
      <Routes>
      <Route  path='/' element={<div>
          {loggedin? <p>welcome to homepage you can see when you are login  </p>:<Link to="/creatuser">first create user</Link>  } 
        </div>}/>
        <Route  path='/verify'element={<T/>}/>
        <Route path='/creatuser'element={<Createuser/>}/>
        <Route  path='/login' element={<Login/>}/>
        
      </Routes>
    </>
  )
}
