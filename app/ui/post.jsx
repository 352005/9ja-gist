import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { ChatBubbleOvalLeftEllipsisIcon as Chat, HandThumbUpIcon } from '@heroicons/react/24/outline';

const Posts = ({url, heading, postText, comments, like, type}) => {
  return (
    <div className=' w-full mx-4 p-1 relative border border-gray-800 rounded-md mb-6 grid'>
      <div className='flex flex-row border border-gray-500 absolute -top-2 bg-white px-1 justify-self-end mr-4 rounded'>
        <div className={clsx(
          'w-2 h-2 rounded mt-1',
          {
            'bg-red-600' : type === "politics",
            'bg-blue-600' : type === "general",
            'bg-green-600' : type === 'news',
            'bg-purple-800' : type === 'technology',
            'bg-yellow-500' : type === 'entertainment',
          }
        )}></div>
        <p className='font-ptsans px-1 text-[.7em]'>{type.toUpperCase()}</p>
      </div>

      <div className="grid grid-cols-[15%_60%_30%] grid-rows-1">
        <div className=''>
          <Image
          src={url}
          alt='Profile Picture'
          className='size-11'
          />
        </div>
        
        
        <div className="mt-2">
          <p className='text-sm font-bold'>{heading}</p>
          <div className="relative overflow-hidden h-11">
            <p className='text-sm line-clamp-2'>{postText}</p>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
          
        </div>

        <div className="grid grid-cols-2 grid-rows-1 mt-8 gap-1">
          <div className='grid grid-cols-2 grid-rows-1'>
            <Chat className='size-5' />
            <p>2</p>
          </div>

          <div className='grid grid-cols-2 grid-rows-1'>
            <HandThumbUpIcon className='size-5' />
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts;