'use client'

import CustomSelect from "../ui/customSelect";
import Posts from "../ui/post";
import { SideNav } from "../ui/sideNav";
import ProfileImg from '@/public/images.jpeg';

const Discuss = ()=>{
  return (
    <div className="flex flex-row">
        <SideNav />
      <main className="overflow-visible w-[78%]">
        <div>
          <CustomSelect options={['Latest', 'Popular', 'New']} />
          <Posts url={ProfileImg} type='politics' />
          <Posts url={ProfileImg} type='entertainment' />
        </div>
      </main>
    </div>
  )
}

export default Discuss;