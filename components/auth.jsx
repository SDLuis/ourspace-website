'use client'

import Link from 'next/link'

export default function Utilities () {
  return (
    <div className='w-full h-56 flex flex-col gap-3 items-center justify-center py-5 rounded-md border border-solid border-gray-700'>
      <p className='dark:text-gray-300 text-[#121212] font-semibold text-xl'>¿Eres nuevo en Ourspace?</p>
      <button className='dark:bg-gray-200 dark:text-black bg-[#121212] text-[#f2f2f2] px-[20%] py-2 rounded-r-full rounded-l-full text-lg font-medium'><Link href='/register'>Registrarse</Link></button>
      <button className='bg-blue-900 text-[#f2f2f2] px-[15%] py-2 rounded-r-full rounded-l-full text-lg font-medium'><Link href='/login'>Inicial Sección</Link></button>
      <div className='flex justify-center px-3'>
        <p className='text-sm dark:text-gray-400 text-black opacity-70'>Al registrarte, aceptas la política de Uso de Cookies.</p>
      </div>
    </div>
  )
}
