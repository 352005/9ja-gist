'use client'

import { useRouter } from "next/navigation";
import Logo from "../component/logo";
import '../form.css';
import Link from "next/link";



const Login = ()=>{
  const router = useRouter();

  const submitForm = (e)=>{
    e.preventDefault();
    router.push('/discuss');
  }

  return (
    <main>
      <Logo sign={{
        header: 'Sign In',
        text: `Get into your house in 9ja`,
      }} />

      <form onSubmit={submitForm} method='POST'>
        <fieldset>
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

         <div className="flex justify-between">
          <div className="mt-auto mx-2">
            <input type="checkbox" name="radio" id="checkbox" required />
            <label htmlFor="radio" className="checks -mt-[.4em] -mx-0 font-gothic">Remember me</label>
          </div>

          <Link href='/RecoverPassword' className="font-gothic text-green-600 text-md">Forgot Password?</Link>
         </div>
          
          <div className="flex justify-center">
            <button type="submit" className="mt-4 bg-green-400 text-white py-[.2em] px-14 rounded-full focus:outline-none hover:bg-green-500 font-handlee">Sign Up</button>
          </div>
        </fieldset>
      </form>

      <p className="text-center font-handlee my-8">Don&apos;t have an account? <Link href='/' className="text-green-400 underline text-lg">Sign Up</Link></p>
    </main>
  )
}

export default Login;