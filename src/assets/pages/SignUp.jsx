import React from 'react'
import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>

         <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
          <form className='flex flex-col gap-4'>
          <input type="text" placeholder='username'  className='border p-3 rounded-lg'/>
          <input type="email" placeholder='email'  className='border p-3 rounded-lg'/>
          <input type="password" placeholder='password'  className='border p-3 rounded-lg'/>
          
          <button className='bg-green-700  rounded-lg text-white p-3 uppercase hover:opacity-95'>Sign up</button>
        </form>

        <div className='flex gap-2 mt-3'>
            <p>Have an account?</p>
            <Link to={'sign-in'}>
              <span className='text-blue-700'>Signin</span>
            </Link>
        </div>
    </div>
  )
}


