'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import UseAuth from '../../hooks/useLogin'

export default function LoginComponent () {
  const { login, setUser, setPassword, disabled, isLogged } = UseAuth()
  useEffect(() => {
    if (isLogged) {
      window.location.href = '/home'
    }
  }, [isLogged])
  return (
    <form className='bg-white dark:bg-black h-[calc(100vh-50px)]' onSubmit={login}>
      <div className='Login grid bg-white dark:bg-black h-[60vh] sm:h-[75vh] place-items-center'>
        <main className='w-full h-full sm:border border-solid border-gray-700 sm:rounded-lg sm:w-[451px] sm:h-[70vh] '>
          <div className='formulario flex flex-col justify-center items-center gap-4 h-full'>
            <center>
              <h2 className='font-medium text-2xl dark:text-gray-200 text-black'>Welcome to Ourspace</h2>
            </center>
            <div className='w-9/12'>
              <div className='mb-4'>
                <label htmlFor='user' className='block mb-2 text-sm font-medium text-black dark:text-gray-300'>User</label>
                <input type='text' id='user' onChange={(e) => { setUser(e.target.value) }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white text-black' placeholder='Louis00' required />
              </div>
              <div className='mb-[13px]'>
                <label htmlFor='password' className='block mb-2 text-sm font-medium dark:text-gray-300 text-black'>Password</label>
                <input type='password' id='password' onChange={(e) => { setPassword(e.target.value) }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white text-black' placeholder='•••••••••' required />
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
              <p className='login-card-footer-text dark:text-gray-200 text-black text-lg'>
                Don't have an account?{' '}
                <Link href='/register' className='border-b dark:border-b-gray-300 border-b-gray-800 dark:opacity-0 dark:text-gray-300 text-black opacity-90'>
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
