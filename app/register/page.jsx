/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import UseRegister from '../../hooks/useRegister'

export default function RegisterComponent () {
  const { Register, isRegister, form, setForm, disabled } = UseRegister()

  useEffect(() => {
    setTimeout(() => {
      if (isRegister) {
        window.location.href = '/login'
      }
    }, 500)
  }, [isRegister])

  return (
    <form onSubmit={Register}>
      <div className='Register grid h-[65vh] sm:h-[95vh] place-items-center'>
        <main className='w-full h-full sm:border border-solid border-gray-700 dark:bg-black bg-white sm:rounded-lg sm:w-[451px] sm:h-[90vh] '>
          <div className='formulario w-full flex flex-col gap-4 justify-center items-center h-full'>
            <center>
              <h2 className='font-medium text-2xl dark:text-gray-200 text-black'>Register</h2>
            </center>
            <div className='w-10/12'>
              <div className='grid gap-6 w-full mb-4 grid-cols-2'>
                <div>
                  <label htmlFor='first_name' className='block mb-2 text-sm font-medium dark:text-gray-200 text-black'>First name</label>
                  <input
                    type='text' id='first_name' onChange={(e) => {
                      setForm({ ...form, firstNameReg: e.target.value })
                    }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white text-black' placeholder='Louis' required
                  />
                </div>
                <div>
                  <label htmlFor='last_name' className='block mb-2 text-sm font-medium dark:text-gray-200 text-black'>Last name</label>
                  <input
                    type='text' id='last_name' onChange={(e) => {
                      setForm({ ...form, lastNameReg: e.target.value })
                    }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white text-black' placeholder='Rincon' required
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label htmlFor='user' className='block mb-2 text-sm font-medium dark:text-gray-200 text-black'>User</label>
                <input
                  type='text' id='user' onChange={(e) => {
                    setForm({ ...form, userReg: e.target.value })
                  }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white text-black' placeholder='LRincon' required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block mb-2 text-sm font-medium dark:text-gray-200 text-black'>Password</label>
                <input
                  type='password' onChange={(e) => {
                    setForm({ ...form, passwordReg: e.target.value })
                  }} id='password' className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white text-black' placeholder='•••••••••' required
                />
              </div>
              <input className='w-[85%] sm:w-full' type='file' onChange={(e) => setForm({ ...form, img: e.target.files[0] })} />
              {
              form.img.length !== 0 ? <div className='flex justify-center my-1'> <img className='w-[100px] h-[100px] rounded-full object-cover' src={URL.createObjectURL(form.img)} alt='user img' /> </div> : null
            }
            </div>
            <div className='w-full flex justify-center'>
              <button
                disabled={disabled}
                className='Button mb-1 focus:outline-none disabled:bg-blue-500 bg-blue-800 py-2 dark:text-gray-300 text-gray-200 px-10 rounded-r-full rounded-l-full w-10/12'
                type='submit'
              >
                Register
              </button>
            </div>
            <div>
              <p className='login-card-footer-text dark:text-gray-200 text-black text-lg'>
                Already have an account?{' '}
                <Link href='/login' className='border-b dark:border-b-gray-300 border-b-gray-800 dark:opacity-0 dark:text-gray-300 text-black opacity-90'>
                  Log in here
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </form>
  )
}
