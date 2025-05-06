import React from 'react'

export default function Sidebarright() {
  return (
    <div className=' grid grid-rows-[10%_90%] h-screen ml-5   '>
     <div className='border-b-2 border-gray-200 flex justify-center items-center text-xl '>
       <p className='text-xl capitalize tracking-[2px]'>message</p>
     </div>
     <div className='overflow-x-hidden overflow-y-auto'>
       message box
     </div>
    </div>
  )
}
