import React from 'react'

export default function Sidebar () {
  return (
    <div className='w-[95%] flex justify-end rounded-md'>
      <div className='flex gap-3 justify-center border-b cursor-pointer border-sky-900 h-10 w-[56%]'>
        <p className='font-semibold text-3xl'>#</p>
        <p className='font-semibold text-2xl'>Explorar</p>
      </div>
    </div>
  )
}
