'use client';

import Image from "next/image";
import Discussion from '/public/comment-black.svg';
import Following from '/public/star.svg';
import Arrow from '/public/arrow-right.svg';
import Add from '/public/plus-solid.svg';
import { useRouter } from "next/navigation";
import { useState } from "react";

const Discuss = ()=>{
  const addPostRoute = useRouter();
  const [isOpen, setIsOpen] = useState(false);
 

  const routeFunc =()=>{
    addPostRoute.push('/addPost');
  }

  const openSideNav = ()=>{
    document.querySelector('.sideMenu').classList.toggle('open');
    document.querySelector('.arrowDiv').classList.toggle('click');

    setIsOpen(!isOpen);
  }



  return (
    <>
      <div className="fullPage ">
        <div className="sideMenu relative h-screen w-[10%] p-8 text-sm font-ptsans shadow-2xl overflow-hidden" >
          
          {isOpen ? <button 
          className="addPost absolute bg-green-700 w-[75%] h-auto p-1 text-white text-base rounded-md"
          onClick={routeFunc}
          >Start New Discussion
        </button> : <button 
            className="addPost bg-green-700 w-8 h-auto text-white text-base rounded-[50%] absolute left-3"
            onClick={routeFunc}
            ><Image src={Add} alt="Add button" className="w-5 h-5 m-1.5" />
          </button>}

          <div className="postType absolute mt-16 left-4 grid grid-row-2 gap-4">
            <div className="grid grid-cols-2">
              <Image src={Discussion} alt='Discuss icon' className="top-8 w-7 h-7" />
              <p className="-ml-4 mt-1">All discussions</p>
            </div>

            <div className="grid grid-cols-2">
              <Image src={Following} alt='Discuss icon' className="top-8 w-6 h-6" />
              <p className="-ml-4 mt-1">Following</p>
            </div>
          </div>

          <div className="postSubject block relative my-12 grid grid-row-auto gap-y-4 top-60">
            <div className="grid grid-cols-2 ">
              <span className="indicator bg-blue-600"></span>
              <p className="-ml-16 -mt-1">GENERAL</p>
            </div>

            <div className="grid grid-cols-2 ">
              <span className="indicator bg-green-600"></span>
              <p className="-ml-16 -mt-1">NEWS</p>
            </div>

            <div className="grid grid-cols-2 ">
              <span className="indicator bg-red-600"></span>
             <p className="-ml-16 -mt-1">POLITICS</p>
            </div>

            <div className="grid grid-cols-2 ">
              <span className="indicator bg-purple-800"></span> 
              <p className="-ml-16 -mt-1">TECHNOLOGY</p>
            </div>

            <div className="grid grid-cols-2 ">
              <span className="indicator bg-yellow-500"></span>
              <p className="-ml-16 -mt-1">ENTERTAINMENT</p>
            </div>
          </div>

          {/*button to open and close the side menu */}
          <div className="arrowDiv w-6 h-6  border absolute relative shadow-xl bg-white  left-4" onClick={openSideNav}>
             <Image src={Arrow} alt="Arrow left" className="arrow" />
          </div>

        </div>

        <div className="main">

        </div>
      </div>
      
    </>
  )
}

export default Discuss;