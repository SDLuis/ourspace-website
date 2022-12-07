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
    <div className='px-4 w-full md:px-[13%] py-2 flex justify-between border-b border-solid border-gray-700 '>
      <div className='flex items-center'>
        <p className='text-4xl py-2 font-semibold text-gray-100'><Link href='/home'>Ourspace</Link></p>
      </div>
      {user
        ? <div className='flex items-center gap-6'>
          <div className='hidden sm:flex items-center gap-6'>
            <Home />
            <Message />
            <Add />
          </div>
          <div>
            <img className='w-12 h-12 mt-1 object-cover rounded-full cursor-pointer' onClick={() => setUserMenu(!userMenu)} src={user.img} alt='user' />
            <div id='dropdownInformation' className={` ${userMenu ? 'absolute z-10 top-14 right-2 sm:right-28' : 'hidden'} w-44 rounded divide-y shadow bg-gray-700 divide-gray-600`}>
              <div className='py-3 px-4 text-sm text-gray-200'>
                <div>{user.name}</div>
                <div className='font-medium truncate'>User: {user.user}</div>
              </div>
              <ul className='py-1 text-sm text-gray-200' aria-labelledby='dropdownInformationButton'>
                <li onClick={() => setUserMenu(!userMenu)}>
                  <Link href={`/user/${user.user}`} className='block py-2 px-4  hover:bg-gray-600 hover:text-white'>Perfil</Link>
                </li>
                <li onClick={() => setUserMenu(!userMenu)}>
                  <Link href='#' className='block py-2 px-4 hover:bg-gray-600 hover:text-white'>Configuración</Link>
                </li>
                <li onClick={() => setUserMenu(!userMenu)}>
                  <Link href='#' className='block py-2 px-4 hover:bg-gray-600 hover:text-white'>Earnings</Link>
                </li>
              </ul>
              <div className='py-1' onClick={() => setUserMenu(!userMenu)}>
                <button onClick={() => logout()} className='block py-2 px-4 text-sm w-full bg-gray-600 text-gray-200 hover:text-white'>Cerrar sección</button>
              </div>
            </div>
          </div>
        </div>
        : null}
      <Toaster />
    </div>
  )
}
