'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LoginComponent () {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='Login grid h-[80vh] sm:h-[75vh] place-items-center'>
      <main className='w-full h-[80vh] sm:border border-solid border-gray-400 sm:rounded-lg sm:w-[451px] sm:h-[70vh] '>
        <div className='formulario flex flex-col justify-center items-center gap-4 h-full'>
          <center>
            <h2 className='font-medium text-2xl dark:text-gray-200'>Welcome to Ourspace</h2>
          </center>
          <div className='w-9/12'>
            <div className='mb-4'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Email address</label>
              <input type='email' id='email' onChange={(e) => { setUserEmail(e.target.value) }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-400 placeholder-gray-400 text-white' placeholder='Louis00' required />
            </div>
            <div className='mb-[13px]'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Password</label>
              <input type='password' id='password' onChange={(e) => { setPassword(e.target.value) }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-400 placeholder-gray-400 text-white' placeholder='•••••••••' required />
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <button
              className='Button focus:outline-none  bg-blue-800 py-2 text-gray-300 px-10 rounded-r-full rounded-l-full w-9/12'
              type='submit'
              onClick={(e) => {
                e.preventDefault()
                console.log(userEmail, password)
              }}
            >
              Log In
            </button>
          </div>
          <div>
            <p className='login-card-footer-text dark:text-gray-200 text-lg'>
              Don't have an account?{' '}
              <Link href='/register' className='border-b border-b-gray-800 dark:border-b-gray-300 text-gray-800 dark:text-gray-300'>
                Register here
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
