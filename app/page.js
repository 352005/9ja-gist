'use client'

import Image from "next/image";
import Logo from "./component/logo";
import Facebook from '../public/facebook.svg';
import Email from '../public/email.png';
import Whatsapp from '../public/whatsapp.svg';
import X from '../public/x-twitter.svg';
import './form.css'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Main } from "next/document";

const Home = ()=>{
  const router = useRouter()

  const submitForm = (e)=>{
    e.preventDefault();
    router.push('/discuss');
  }

  return (
    <Main>
      <Logo sign={{
        header: 'Sign Up',
        text: `Let's build a house for you in 9ja`,
      }} />
      
      <form onSubmit={submitForm} method='POST'>
        <fieldset>
          <div className="container">
            <div className="entryarea">
              <input type="text" name="username" id="username" className="customInput"  required/>
              <label htmlFor="username" className="font-handlee"> Username</label>
            </div>
          </div>

          <div className="container">
            <div className="entryarea">
              <input type="email" name="email" id="email" className="customInput" required />
              <label htmlFor="email" className="font-handlee"> Email Address</label>
            </div>
          </div>

          <div className="container">
            <div className="entryarea">
              <input type="password" name="password" id="password" className="customInput" required />
              <label htmlFor="username" className="font-handlee"> Password</label>
            </div>
          </div>
         
          <div className="mt-auto mx-2">
            <input type="checkbox" name="radio" id="checkbox" required />
            <label htmlFor="radio" className="checks -mt-[.4em] -mx-0 font-gothic">I accept the policies and terms</label>
          </div>
          
          <div className="flex justify-center">
            <button type="submit" className="mt-4 bg-green-400 text-white py-[.2em] px-14 rounded-full focus:outline-none hover:bg-green-500 font-handlee">Sign Up</button>
          </div>
        </fieldset>
      </form>

      <div className="flex justify-center mb-4">
        <Image src={Facebook} alt="Facebook Icon" className="w-6 h-6 mx-2" />
        <Image src={Email} alt="Email Icon" className="w-6 h-6 mx-2" />
        <Image src={Whatsapp} alt="Whatsapp Icon" className="w-6 h-6 mx-2" />
        <Image src={X} alt="X Icon" className="w-6 h-6 mx-2" />
      </div>

      <p className="text-center font-handlee my-8">Already have a home here? <Link href='/login' className="text-green-400 underline text-lg">Login</Link></p>
    </Main>
  )
}

export default Home;