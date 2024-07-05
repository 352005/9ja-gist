'use client'

import { useRouter } from "next/navigation";
import Logo from "../ui/logo";
import '../form.css';
import Link from "next/link";
import { useState } from "react";
import clsx from 'clsx';


const Login = ()=>{
  const router = useRouter();
  const [passwordValid, setPasswordValid] = useState('');
  const [emailValid, setEmailValid] = useState('');

//check if inputted email is valid i.e contains '.email.com'
  const validEmail = (value)=>{
    let emailIsValid;
    let realEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isReal = realEmail.test(value);
  
    if(isReal){
      emailIsValid = 'Valid Email Address';
      return {isValid: true, message: emailIsValid};
    }

    else if(value.length == ''){
      emailIsValid = '';
      return {isValid: false, message: emailIsValid};
    }

    else{
      emailIsValid = 'Invalid Email Address';
      return {isValid: false, message: emailIsValid};
    }
  }

  //check if inputted password is strong
  const validPassword = (value)=>{
    let passwordIsValid;
    let strongPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/;
    let isStrong = strongPassword.test(value);
  
    if((value.length >= 8) && isStrong){
      passwordIsValid = 'Strong Password';
      return {isValid: true, message: passwordIsValid};
    }

    else if(value.length == ''){
      passwordIsValid = '';
      return {isValid: false, message: passwordIsValid};
    }

    else{
      passwordIsValid = 'Weak password';
      return {isValid: false, message: passwordIsValid};
    }
  }

  const handleValidPassword = (e)=>{
    setPasswordValid(validPassword(e.target.value).message);
  }

  const handleValidEmail = (e)=>{
    setEmailValid(validEmail(e.target.value).message);
  }

  const submitForm = (e)=>{
    e.preventDefault();
    const passwordValidated = 'Strong Password';
    const emailValidated = 'Valid Email Address';

    if ((emailValidated === emailValid) && (passwordValidated === passwordValid)) {
      alert('Sign Up successful');
      router.push('/discuss');
    } 
    else {
      alert('Sign Up unsuccessful, please re-fill the form');
    }
  }

  return (
    <main>
      <Logo sign={{
        header: 'Sign In',
        text: `Get into your house in 9ja`,
      }} />

      <form onSubmit={submitForm} method='POST' autoComplete="on">
        <fieldset>
          <div className="container">
            <div className="entryarea">
              <input type="email" name="email" id="email" className="customInput" required onInput={handleValidEmail} />
              <label htmlFor="email" className="font-handlee"> Email Address</label>
            </div>
            <p className={clsx('mt-4 -mb-4 ml-4 font-ptsans',
              {'text-red-600': emailValid === 'Invalid Email Address',
                'text-green-600': emailValid === 'Valid Email Address',
              }
            )}>{emailValid}</p>
          </div>

          <div className="container">
            <div className="entryarea">
              <input type="password" name="password" id="password" className="customInput" required onInput={handleValidPassword} />
              <label htmlFor="username" className="font-handlee"> Password</label>
            </div>
            <p className={clsx('mt-4 -mb-4 ml-4 font-ptsans',
              {'text-red-600': passwordValid === 'Weak password',
              'text-green-600': passwordValid === 'Strong Password',
            }
            )}>{passwordValid}</p>
          </div>

         <div className="flex justify-between">
          <div className="mt-auto mx-2">
            <input type="checkbox" name="radio" id="checkbox" />
            <label htmlFor="radio" className="checks -mt-[.4em] -mx-0 font-gothic">Remember me</label>
          </div>

          <Link href='/RecoverPassword' className="font-gothic text-green-600 text-md">Forgot Password?</Link>
         </div>
          
          <div className="flex justify-center">
            <button type="submit" className="mt-4 bg-green-400 text-white py-[.2em] px-14 rounded-full focus:outline-none hover:bg-green-500 font-handlee">Sign In</button>
          </div>
        </fieldset>
      </form>

      <p className="text-center font-handlee my-8">Don&apos;t have an account? <Link href='/' className="text-green-400 underline text-lg">Sign Up</Link></p>
    </main>
  )
}

export default Login;