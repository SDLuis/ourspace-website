/* eslint-disable react/jsx-closing-tag-location */

'use client'

import Link from 'next/link'
import Image from 'next/image'
import placeholder from '../public/placeholder-user.jpg'
import UserLogged from '../hooks/userLogged'
import Loading from './loading'
import { Location, BirthDay, Edit, Profile, Logout } from './icons'

export default function Utilities () {
  const { userFound, loading, logout } = UserLogged()
  const img = !userFound.img ? placeholder : userFound.img

  return (
    <div className='w-[88px] 1xl:w-[270px] min-h-screen flex items-start rounded-md'>
      <div className='w-full border border-gray-700 min-h-[10rem] xl:min-h-[16rem] h-auto'>
        {
          loading ? <div className='w-full min-h-[10rem] xl:min-h-[16rem] h-auto flex justify-center items-center text-white'><Loading /></div> : null
        }
        {userFound
          ? <div className='w-full h-full'>
            <div className='w-full h-full hidden 1xl:block'>
              <div className='flex gap-3 p-3 items-center'>
                <Link href={`/user/${userFound.user}`}>
                  <Image width={48} height={48} className='rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover' src={img} alt='user' />
                </Link>
                <div className='flex justify-between flex-1'>
                  <div className='py-1 h-14 sm:h-16'>
                    <Link href={`/user/${userFound.user}`}>
                      <p className='font-medium text-lg'>{userFound.First_Name + ' ' + userFound.Last_Name}</p>
                      <p className='text-sm opacity-60'>@{userFound.user}</p>
                    </Link>
                  </div>
                  <div className='py-3'>
                    <Link href='/user/edit'>
                      <Edit />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='border-t border-t-gray-700' />
              <div className='p-3'>
                <div className='flex items-center'>
                  <Location /> <p className='text-gray-200 p-3'>{userFound.Location ? userFound.Location : 'anonimo'}</p>
                </div>
                <div className='flex items-center'>
                  <BirthDay /> <p className='text-gray-200 p-3'>{userFound.Date_Of_Birth ? userFound.Date_Of_Birth : '-- : -- : ----'}</p>
                </div>
              </div>
              <div className='border-t border-t-gray-700' />
              <div className='flex justify-between items-center p-3'>
                <Link href={`/user/${userFound.user}`}>
                  <Profile />
                </Link>
                <button onClick={() => logout()}>
                  <Logout />
                </button>
              </div>
            </div>
            <div className='flex-col gap-4 flex items-center w-full xl:hidden p-2'>
              <Link href={`/user/${userFound.user}`}>
                <Image width={48} height={48} className='rounded-full w-12 h-12 object-cover' src={img} alt='user' />
              </Link>
              <Link href='/user/edit'>
                <Edit />
              </Link>
              <button onClick={() => logout()}>
                <Logout />
              </button>
            </div>
          </div>
          : null}
      </div>
    </div>
  )
}
