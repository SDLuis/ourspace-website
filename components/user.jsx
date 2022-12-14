/* eslint-disable react/jsx-closing-tag-location */
'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import { Back } from './icons'
import ListOfOwnPosts from './listOfOwnPosts'
import { useState } from 'react'
import placeholder from '../public/placeholder-user.jpg'
import placeholderCover from '../public/placeholder-portada.webp'

export default function User ({ foundUser, foundPosts }) {
  const [page, setPage] = useState('posts')
  const img = !foundUser.img ? placeholder : foundUser.img
  const cover = !foundUser.cover ? placeholderCover : foundUser.cover

  return (
    <div className='w-full flex justify-center lg:px-[18%]'>
      <div className='flex flex-col w-full sm:w-[598px] items-center sm:border-x min-h-screen border-solid border-gray-700 pb-6'>
        <div className='flex justify-start w-full'>
          <div className='flex items-center h-8 gap-6 sm:gap-10 py-7 sm:py-9'>
            <Link className='' href='/home'><Back /></Link>
            <p className='text-2xl font-semibold -mt-1'>User</p>
          </div>
        </div>
        <div className='relative flex justify-center w-full sm:w-[598px] h-[60%] sm:h-[280px]'>
          <Image width={598} height={280} className='w-full sm:w-[596px] h-full sm:h-[280px] object-cover relative' alt='portada' src={cover} />
          <div className='w-32 h-32 sm:w-44 sm:h-44 bg-gray-200 flex justify-center items-center rounded-full absolute -bottom-16 sm:-bottom-20 left-0 right-0 m-auto'><Image placeholder={placeholder} width={160} height={160} className='w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover' alt='userphoto' src={img} /></div>
          <div className='flex justify-between w-[90%] sm:w-[95%] absolute -bottom-[52px] left-0 right-0 m-auto'>
            <button className='sm:w-48 px-5 sm:px-0 py-2 rounded-md bg-slate-800 text-gray-200'>Seguir</button>
            <button className='sm:w-48 px-5 sm:px-0 py-2 rounded-md bg-sky-900 text-gray-200'>Mensaje</button>
          </div>
        </div>
        <div className='mt-[68px] sm:mt-[84px]'>
          <p className='text-center text-gray-200 font-medium text-xl'>{`${foundUser.First_Name} ${foundUser.Last_Name}`}</p>
        </div>
        <div className='w-full my-5 border-t border-solid border-gray-700'>
          <button className={`px-4 py-3 border-b-2 ${page === 'posts' ? 'border-sky-900' : 'border-b-transparent'}`} onClick={() => setPage('posts')}>Publicaciones</button>
          <button className={`px-4 py-3 border-b-2 ${page === 'info' ? 'border-sky-900' : 'border-b-transparent'}`} onClick={() => setPage('info')}>Información</button>
        </div>
        {
          page === 'posts'
            ? <div className='w-full'>
              {foundPosts.length === 0
                ? <div className='flex justify-center my-12'><p className='text-gray-200 text-lg tracking-wide'>No post yet</p></div>
                : <div className='w-full flex flex-col items-center mt-5'><ListOfOwnPosts prevPosts={foundPosts} user={foundUser.user} /> </div>}
            </div>
            : <div className='w-full h-[85vh] grid place-items-center'> Info </div>
}
      </div>
    </div>
  )
}
