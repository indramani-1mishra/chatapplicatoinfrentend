import React, { useContext } from 'react'
import Context from '../../../context/formresultcontext'

export default function T() {

  const {success}= useContext(Context);
  console.log(success);
  return (
    <div>
       <p>Welcome to user verfication page</p>
       {success?<div>user created successfully</div>:<div> user not created please try again </div>}
    </div>
  )
}
