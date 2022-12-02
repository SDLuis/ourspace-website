'use client'

import Link from 'next/link'

export default function Utilities () {
  return (
    <div className='w-full h-56 flex flex-col gap-3 items-center justify-center py-5 rounded-md border border-solid border-gray-400'>
      <p className='text-gray-300 font-semibold text-xl'>¿Eres nuevo en Ourspace?</p>
      <button className='bg-gray-200 px-[20%] py-2 rounded-r-full rounded-l-full text-black text-lg font-medium'><Link href='/register'>Registrarse</Link></button>
      <button className='bg-blue-900 px-[15%] py-2 rounded-r-full rounded-l-full text-gray-200 text-lg font-medium'><Link href='/login'>Inicial Sección</Link></button>
      <div className='flex justify-center px-3'>
        <p className='text-sm text-gray-400'>Al registrarte, aceptas la política de Uso de Cookies.</p>
      </div>
    </div>
  )
}
