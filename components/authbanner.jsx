'use client'

import Link from 'next/link'

export default function AuthBanner () {
  return (
    <div className='fixed md:hidden bottom-0 w-full flex justify-center gap-2 items-center h-16 bg-sky-500'>
      <button className='bg-gray-200 px-[13%] py-2 rounded-r-full rounded-l-full text-black text-base font-medium'><Link href='/register'>Registrarse</Link></button>
      <button className='bg-sky-500 px-[10%] py-2 rounded-r-full rounded-l-full border border-solid border-sky-700 text-gray-200 text-base font-medium'><Link href='/login'>Inicial Sección</Link></button>
    </div>
  )
}
