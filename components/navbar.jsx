'use client'

import Link from 'next/link'
import { Home, Message, Add } from './icons'

export default function Navbar () {
  return (
    <div className='px-4 w-full md:px-[13%] py-2 flex justify-between border-b border-solid border-gray-500 '>
      <p className='text-4xl font-semibold text-white'><Link href='/home'>Ourspace</Link></p>
      <div className='flex gap-6 pt-2'>
        <Home />
        <Message />
        <Add />
      </div>
    </div>
  )
}
