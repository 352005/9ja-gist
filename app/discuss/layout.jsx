import NavLogo from '/public/9jaLogo-small.png'
import Image from 'next/image';

const DiscussLayout = ({children,})=>{
  return(
    <section>
      <nav>
        <Image src={NavLogo} alt='9ja-gist logo' className='w-24 h-14' />
      </nav>
      {children}
    </section>
  )
}

export default DiscussLayout;