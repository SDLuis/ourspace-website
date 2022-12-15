import React from 'react'

export default function UserInfo ({ user }) {
  return (
    <div className='w-full flex justify-center p-4'>
      <div className='flex flex-col w-[80%] gap-1'>
        <span className='flex justify-between text-lg w-full gap-1'><p className='font-medium text-sky-700'>Ubicación:</p><p>{user.Location ? user.Location : 'Anonimo'} </p></span>
        <span className='flex justify-between text-lg w-full gap-1'><p className='font-medium text-sky-700'>Fecha de nacimiento: </p><p>{user.Date_Of_Birth ? user.Date_Of_Birth : '-- : -- : ----'} </p></span>
        <span className='flex justify-between text-lg w-full gap-1'><p className='font-medium text-sky-700'>User:</p> <p>{user.user} </p></span>
      </div>
    </div>
  )
}
