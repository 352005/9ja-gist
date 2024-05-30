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
import { useState } from "react";

const Home = ()=>{
  const router = useRouter();
  const [nameValid, setNameValid] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const [emailValid, setEmailValid] = useState('');

  //check if username is valid i.e up to 3 characters
  const validName = (value)=>{
    let nameIsValid;
    if(value.length < 3){
      nameIsValid = 'Usernames should be up to three characters';
      return {isValid: false, message: nameIsValid};
    }

    else if(value.length == ''){
      nameIsValid = '';
      return {isValid: false, message: nameIsValid};
    }

    else{
      nameIsValid = 'Name added successfully';
      return {isValid: true, message: nameIsValid};
    }
  }

  //check if inputted email is valid i.e contains '@.com'
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
      passwordIsValid = 'Weak Password';
      return {isValid: false, message: passwordIsValid};
    }
  }

  const handleValidName = (e)=>{
    setNameValid(validName(e.target.value).message);
  }

  const handleValidPassword = (e)=>{
    setPasswordValid(validPassword(e.target.value).message);
  }

  const handleValidEmail = (e)=>{
    setEmailValid(validEmail(e.target.value).message);
  }

  const submitForm = (e)=>{
    e.preventDefault();
    const nameValidated = 'Name added successfully';
    const passwordValidated = 'Strong Password';
    const emailValidated = 'Valid Email Address';

    if ((nameValidated === nameValid) && (emailValidated === emailValid) && (passwordValidated === passwordValid)) {
      alert('Sign Up successful');
      router.push('/discuss');
    } 
    else {
      alert('Sign Up unsuccessful, please re-fill the form');
    }
  }

  return (
    <div>
      <Logo sign={{
        header: 'Sign Up',
        text: `Let's build a house for you in 9ja`,
      }} />
      
      <form onSubmit={submitForm} method='POST'>
        <fieldset>
          <div className="container">
            <div className="entryarea">
              <input type="text" name="username" id="username" className="customInput" required onInput={handleValidName} />
              <label htmlFor="username" className="font-handlee"> Username</label>
            </div>
            <p className="mt-4 -mb-4 ml-4">{nameValid}</p>
          </div>

          <div className="container">
            <div className="entryarea">
              <input type="email" name="email" id="email" className="customInput" required onInput={handleValidEmail} />
              <label htmlFor="email" className="font-handlee"> Email Address</label>
            </div>
            <p className="mt-4 -mb-4 ml-4">{emailValid}</p>
          </div>

          <div className="container">
            <div className="entryarea">
              <input type="password" name="password" id="password" className="customInput" required onInput={handleValidPassword} />
              <label htmlFor="password" className="font-handlee"> Password</label>
            </div>
            <p className="mt-4 -mb-4 ml-4">{passwordValid}</p>
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
    </div>
  )
}

export default Home;