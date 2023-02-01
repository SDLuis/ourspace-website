import React from 'react'

export default function UserInfo ({ user }) {
  return (
    <div className='w-full h-[50vh] flex justify-center p-4'>
      <div className='flex flex-col w-[80%] gap-1'>
        <span className='flex justify-between text-lg w-full gap-1'><p className='font-medium text-sky-700'>Ubicación:</p><p className='dark:text-gray-200 text-[#121212]'>{user.Location ? user.Location : 'Anonimo'} </p></span>
        <span className='flex justify-between text-lg w-full gap-1'><p className='font-medium text-sky-700'>Fecha de nacimiento: </p><p className='dark:text-gray-200 text-[#121212]'>{user.Date_Of_Birth ? user.Date_Of_Birth : '-- : -- : ----'} </p></span>
        <span className='flex justify-between text-lg w-full gap-1'><p className='font-medium text-sky-700'>User:</p> <p className='dark:text-gray-200 text-[#121212]'>{user.user} </p></span>
      </div>
    </div>
  )
}
