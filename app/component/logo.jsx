import { useRouter } from "next/navigation";
import Image from 'next/image';
import Flag from '/public/9jaLogo.png';

const Logo = ({sign})=>{
  const router = useRouter();

  const goToLanding = ()=>{
    router.push('/landing');
  }

  return (
    <div onClick={goToLanding}>
      <div className='mx-28'>
        <Image src={Flag} alt='Nigerian flag' className='max-w-[100%]  mt-8 mb-8 md:mx-[10.5em] lg:mx-[28em]'/>
      </div>
      
      <div>
        <h1 className='text-3xl text-center font-ptsans'>{sign.header}</h1>
        <p className='text-center text-[.7em] font-gothic'>{sign.text}</p>
      </div>
    </div>
  )
}

export default Logo;