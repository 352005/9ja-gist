import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const Posts = ({url, heading, postText, comments, like, type}) => {
  return (
    <div className=' w-full mx-4 p-1 relative border border-gray-800 rounded-md mb-6 grid'>
      <div className='flex flex-row border border-gray-500 absolute -top-2 bg-white px-1 justify-self-end mr-4 rounded'>
        <div className="w-2 h-2 rounded bg-red-600 mt-1"></div>
        <p className='font-ptsans px-1 text-[.7em]'>{type.toUpperCase()}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-1">
        <Image
          src={url}
          alt='Profile Picture'
          className='w-1/3'
        />
        
        <div className="grid grid-rows-2 grid-cols-1">
          <h2>{heading}</h2>
          <p>{postText}</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-1">
          
        </div>
      </div>
    </div>
  )
}

export default Posts