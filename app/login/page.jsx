'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import UseAuth from '../../fetch/login'

export default function LoginComponent () {
  const { login, setUser, setPassword, disabled, isLogged } = UseAuth()
  useEffect(() => {
    if (isLogged) {
      window.location.href = '/home'
    }
  }, [isLogged])
  return (
    <form onSubmit={login}>
      <div className='Login grid h-[60vh] sm:h-[75vh] place-items-center'>
        <main className='w-full h-full sm:border border-solid border-gray-900 sm:rounded-lg sm:w-[451px] sm:h-[70vh] '>
          <div className='formulario flex flex-col justify-center items-center gap-4 h-full'>
            <center>
              <h2 className='font-medium text-2xl text-gray-200'>Welcome to Ourspace</h2>
            </center>
            <div className='w-9/12'>
              <div className='mb-4'>
                <label htmlFor='user' className='block mb-2 text-sm font-medium text-gray-300'>User</label>
                <input type='text' id='user' onChange={(e) => { setUser(e.target.value) }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-900 placeholder-gray-400 text-white' placeholder='Louis00' required />
              </div>
              <div className='mb-[13px]'>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-300'>Password</label>
                <input type='password' id='password' onChange={(e) => { setPassword(e.target.value) }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-900 placeholder-gray-400 text-white' placeholder='•••••••••' required />
              </div>
            </div>
            <div className='w-full flex justify-center'>
              <button
                disabled={disabled}
                className='Button cursor-pointer focus:outline-none disabled:cursor-default disabled:bg-blue-500 bg-blue-800 py-2 text-gray-300 px-10 rounded-r-full rounded-l-full w-9/12'
                type='submit'
              >
                Log In
              </button>

            </div>
            <div>
              <p className='login-card-footer-text text-gray-200 text-lg'>
                Don't have an account?{' '}
                <Link href='/register' className='border-b  border-b-gray-300 text-gray-300'>
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </form>
  )
}
