import React, { useState } from 'react';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logoutuser from '../../auth/logoutuser/logoutuser';
import { logout } from '@/redux/userdetails/userslice';
import Searchuser from '../serchuser/Searchuser';
import { RxCross2 } from "react-icons/rx";

export default function Sidebarleftpart() {
  const dispatch = useDispatch();
  const imageurl = useSelector((state) => state.user.imageurl);
  const [showsearch,setshowsearch]=useState(false)
  const navigate = useNavigate();

  const onclickhandler = async () => {

    
    const success = await logoutuser(); // Await is necessary
    if (success) {
      dispatch(logout());
      navigate('/login');
       
    }
  };
  
  return (
    <>
    <div className='text-black p-6 bg-slate-100 rounded-md flex justify-between flex-col shadow-full'>
      {/* Top icons */}
      <div className='w-full p-1 flex items-center flex-col justify-between h-30'>
        <div className='w-full h-15 p-2 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-slate-300 hover:rounded-md'>
          <IoChatbubbleEllipsesSharp style={{ width: '32px', height: "27px" }} />
        </div>
        <div className='w-full h-15 p-2 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-slate-300 hover:rounded-md'>
          <FaUserPlus style={{ width: '32px', height: "27px" }} onClick={()=>setshowsearch(!showsearch)} />
        </div>
      </div>

      {/* Bottom - Avatar and Logout */}
      <div>
        <div className='w-full h-15 p-2 flex items-center justify-center cursor-pointer hover:bg-slate-300 hover:rounded-md' onClick={() => navigate('/login')}>
          <Avatar>
            <AvatarImage src={imageurl} alt="User Image" />
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
        </div>

        <div className='cursor-pointer w-full h-15 p-2 flex items-center justify-center hover:bg-slate-300 hover:rounded-md' onClick={onclickhandler}>
          <CiLogout style={{ width: '32px', height: '28px' }} />
        </div>
      </div>
    </div>
    { showsearch && <Searchuser/>}
     {showsearch &&  <RxCross2 className='absolute top-[6%] right-[10%] cursor-pointer shadow-[0px_0px_3px_0px_black] hover:text-blue-500 rounded-md' size={40} onClick={()=>setshowsearch(false)}/>}
    </>
  );
}
