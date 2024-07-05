'use client';

import Hamburger from '../ui/hamburger';
import NavLogo from '/public/9jaLogo-small.png';
import Search from '/public/searchIcon.svg';
import Cancel from '/public/cancelIcon.svg';
import Image from 'next/image';
import './style.css';

const DiscussLayout = ({children,})=>{

  const clearSearch = ()=>{
    document.querySelector('#search').value = '';
  }

  return(
    <section>
      <nav className='flex flex-row w-full justify-between'>
        <Image src={NavLogo} alt='9ja-gist logo' className='w-24 h-14' />

        <div 
        className='grid grid-cols-[repeat(3, auto)] border border-gray-400 border-solid mt-2 rounded-full h-10 opacity-50 relative'>
          <Image src={Search} alt='search icon' 
          className='icon opacity-50 transform translate-x-3 translate-y-3' />
          
          <input type="search" name="search" id="search" placeholder='Search forum...'
            className='w-[80%] h-8 outline-none m-1 transform translate-x-8 -translate-y-4'
          />

          <Image src={Cancel} alt='search icon' 
          className='icon opacity-50 absolute transform left-[90%] translate-y-3'
          onClick={clearSearch} />
        </div>

        <Hamburger />
      </nav>
      {children}
    </section>
  )
}

export default DiscussLayout;