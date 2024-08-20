import React from 'react';
import Image from 'next/image';
import ProfileImg from '@/public/images.jpeg';
import { BellIcon, Cog8ToothIcon as Setting, ArrowLeftStartOnRectangleIcon as LogOut } from '@heroicons/react/24/solid';


const Menu = () => {
  return (
    <div className='w-[70%] min-h-44 m-4 mt-8 p-4 py-10 bg-white shadow-lg z-50 fixed grid scale-0 rounded-lg' id='userMenu'>
        <Image 
          src={ProfileImg}
          alt='Profile Image'
          className='size-16 justify-self-center'
        />

    <div className="justify-self-center">
      <div className='flex flex-row mt-4'>
        <BellIcon className='size-5 text-green-600' /> 
        <p className='pl-2 font-handlee'>Notifications</p>
      </div>
      
      <div className='flex flex-row mt-4'>
        <Setting className='size-5 text-gray-600' /> 
        <p className='pl-2 font-handlee'>Settings</p>
      </div>

      <div className='flex flex-row mt-4'>
        <LogOut className='size-5 text-red-600' /> 
        <p className='pl-2 font-handlee'>Log out</p>
      </div>
    </div>
      
    </div>
  )
}

export default Menu;