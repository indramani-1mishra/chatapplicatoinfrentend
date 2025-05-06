import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import './usercard.css'
export default function Usercard({username,useremail,userprofile}) {
  return (
    <div className='usercardcon'>
    
    <div className='flex justify-center items-center bg-white-500  '>
          <img src={userprofile} className='h-13 w-13 rounded-full'/>
        </div>
        <div className='detailsuser'>
        <p className='capitalize'>{username}</p>
        <p>{useremail}</p>

        </div>
    
      
    </div>
  )
}
