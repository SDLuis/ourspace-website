/* eslint-disable react/jsx-closing-tag-location */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import placeholder from '../public/placeholder-user.jpg'
import UserLogged from '../fetch/userLogged'
import Loading from './loading'
import { Location } from './icons'

export default function Utilities () {
  const { userFound, loading } = UserLogged()
  const img = !userFound.img ? placeholder : userFound.img

  return (
    <div className='w-[88px] 1xl:w-[270px] min-h-screen flex items-start rounded-md'>
      <div className='w-full border border-gray-700 h-60'>
        {
          loading ? <div className='h-full w-full grid place-items-center text-white'><Loading /></div> : null
        }
        {userFound
          ? <div className='w-full h-full'>
            <div className='flex gap-3 p-2 items-center'>
              <Link href={`/user/${userFound.user}`}>
                <Image width={48} height={48} className='rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover' src={img} alt='user' />
              </Link>
              <div className='py-1 h-14 sm:h-16'>
                <Link href={`/user/${userFound.user}`}>
                  <p className='font-medium text-lg'>{userFound.First_Name + ' ' + userFound.Last_Name}</p>
                  <p className='text-sm'>@{userFound.user}</p>
                </Link>
              </div>
            </div>
            <div className='border-t border-t-gray-700' />
            <div className='p-2 flex items-center'>
              <Location /> <p className='text-gray-200 p-2'>{userFound.Location}</p>
            </div>
          </div>
          : null}
      </div>
    </div>
  )
}
