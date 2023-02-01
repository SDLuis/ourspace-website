import Image from 'next/image'
import Link from 'next/link'
import placeholder from '../public/placeholder-user.jpg'

export default function NewUser ({ user = [] } = {}) {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex gap-4 items-center'>
        <Image className='w-12 h-12 rounded-full object-cover' src={user.img ?? placeholder} alt='userimg' width={64} height={64} />
        <div className='flex flex-col text-black dark:text-white'>
          <p className='font-medium tracking-[0.015em]'>{user.First_Name + ' ' + user.Last_Name}</p>
          <p className='dark:opacity-60 opacity-70 text-sm tracking-wide'>@{user.user}</p>
        </div>
      </div>
      <div>
        <Link className='py-2 px-4 dark:bg-[#ebeff0] bg-[#121212] rounded-l-full rounded-r-full text-[#f2f2f2] dark:text-black font-medium' href={`user/${user.user}`}>Perfil</Link>
      </div>
    </div>
  )
}
