'use client'

import { Send } from './icons'

export default function Comment () {
  return (
    <div className='flex gap-2 w-full'>
      <input className='w-[89%] border text-sm rounded-r-full rounded-l-full focus:ring-gray-500 block px-5 py-2 bg-transparent border-gray-400 placeholder-gray-400 text-white' />
      <button><Send /></button>
    </div>
  )
}
