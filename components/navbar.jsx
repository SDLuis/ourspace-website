/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Link from 'next/link'
import { Home, Message, Add } from './icons'
import UseUser from '../fetch/login'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

export default function Navbar () {
  const [user, setUser] = useState('')
  const [userMenu, setUserMenu] = useState(false)
  const { userLogged, logout } = UseUser()
  useEffect(() => {
    userLogged().then(data => setUser(data))
  }, [])

  return (
    <div className='px-4 w-full md:px-[13%] py-2 flex justify-between border-b border-solid border-gray-500 '>
      <Toaster />
      <div className='flex items-center'>
        <p className='text-4xl font-semibold text-white'><Link href='/home'>Ourspace</Link></p>
      </div>
      <div className='flex items-center gap-6'>
        <div className='hidden sm:flex items-center gap-6'>
          <Home />
          <Message />
          <Add />
        </div>
        {user
          ? <div>
            <img className='w-12 h-12 mt-1 object-cover rounded-full cursor-pointer' onClick={() => setUserMenu(!userMenu)} src={user.img} alt='user' />
            <div id='dropdownInformation' className={` ${userMenu ? 'absolute z-10 top-14 right-2 sm:right-28' : 'hidden'} w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
              <div className='py-3 px-4 text-sm text-gray-900 dark:text-white'>
                <div>{user.name}</div>
                <div className='font-medium truncate'>User: {user.user}</div>
              </div>
              <ul className='py-1 text-sm text-gray-200' aria-labelledby='dropdownInformationButton'>
                <li>
                  <Link href={`/user/${user.user}`} className='block py-2 px-4  hover:bg-gray-600 hover:text-white'>Perfil</Link>
                </li>
                <li>
                  <Link href='#' className='block py-2 px-4 hover:bg-gray-600 hover:text-white'>Configuración</Link>
                </li>
                <li>
                  <Link href='#' className='block py-2 px-4 hover:bg-gray-600 hover:text-white'>Earnings</Link>
                </li>
              </ul>
              <div className='py-1'>
                <button onClick={() => logout()} className='block py-2 px-4 text-sm w-full bg-gray-600 text-gray-200 hover:text-white'>Cerrar sección</button>
              </div>
            </div>
          </div>
          : null}
      </div>
    </div>
  )
}
