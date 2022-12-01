'use client'

import { Home, Message, Add } from './icons'

export default function Navbar () {
  return (
    <div className='px-4 w-full md:px-[13%] py-2 flex justify-between bg-[#000009] border-b border-solid border-gray-500 '>
      <p className='text-4xl font-semibold text-white'>Ourspace</p>
      <div className='flex gap-6 pt-2'>
        <Home />
        <Message />
        <Add />
      </div>
    </div>
  )
}
