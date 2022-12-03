/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import UseRegister from '../../fetch/register'

export default function RegisterComponent () {
  const { Register, isRegister, form, setForm, disabled, setDisabled } = UseRegister()

  useEffect(() => {
    setTimeout(() => {
      if (isRegister) {
        window.location.href = '/login'
      }
    }, 500)
  }, [isRegister])

  return (
    <div className='Register grid h-[95vh] place-items-center'>
      <main className='w-full h-[100vh] border border-solid border-gray-400 bg-black sm:rounded-lg sm:w-[451px] sm:h-[90vh] '>
        <div className='formulario w-full flex flex-col gap-4 justify-center items-center h-full'>
          <center>
            <h2 className='font-medium text-2xl dark:text-gray-200'>Register</h2>
          </center>
          <div className='w-10/12'>
            <div className='grid gap-6 w-full mb-4 grid-cols-2'>
              <div>
                <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>First name</label>
                <input
                  type='text' id='first_name' onChange={(e) => {
                    setForm({ ...form, firstNameReg: e.target.value })
                  }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-400 placeholder-gray-400 text-white' placeholder='Louis' required
                />
              </div>
              <div>
                <label htmlFor='last_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Last name</label>
                <input
                  type='text' id='last_name' onChange={(e) => {
                    setForm({ ...form, lastNameReg: e.target.value })
                  }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-400 placeholder-gray-400 text-white' placeholder='Rincon' required
                />
              </div>
            </div>
            <div className='mb-4'>
              <label htmlFor='user' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>User</label>
              <input
                type='text' id='user' onChange={(e) => {
                  setForm({ ...form, userReg: e.target.value })
                }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-400 placeholder-gray-400 text-white' placeholder='LRincon' required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Password</label>
              <input
                type='password' onChange={(e) => {
                  setForm({ ...form, passwordReg: e.target.value })
                }} id='password' className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-400 placeholder-gray-400 text-white' placeholder='•••••••••' required
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
              className='Button mb-1 focus:outline-none disabled:bg-blue-500 bg-blue-800 py-2 text-gray-300 px-10 rounded-r-full rounded-l-full w-10/12'
              type='submit'
              onClick={(e) => {
                e.preventDefault()
                setDisabled(true)
                Register()
                setTimeout(() => { setDisabled(false) }, 2000)
              }}
            >
              Register
            </button>
          </div>
          <div>
            <p className='login-card-footer-text dark:text-gray-200 text-lg'>
              Already have an account?{' '}
              <Link href='/login' className='border-b border-b-gray-300 text-gray-300'>
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
