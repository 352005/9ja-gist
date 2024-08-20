'use client'

import CustomSelect from "../ui/customSelect";
import Menu from "../ui/menu";
import Posts from "../ui/post";
import { SideNav } from "../ui/sideNav";
import ProfileImg from '@/public/images.jpeg';

const Discuss = ()=>{
  return (
    <div className="flex flex-row">
        <SideNav />
      <main className="overflow-visible w-[78%] z-0 ml-16">
        <Menu />
        <div>
          <CustomSelect options={['Latest', 'Popular', 'New']} />
          <Posts url={ProfileImg} heading='Problem with heroIcon on nextJs' postText='I have been having issue using and remembering names of icon' type='politics' />
          <Posts url={ProfileImg} type='entertainment' />
        </div>
      </main>
    </div>
  )
}

export default Discuss;