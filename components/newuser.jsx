import Image from 'next/image'
import Link from 'next/link'
import placeholder from '../public/placeholder-user.jpg'

export default function NewUser ({ user = [] } = {}) {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex gap-4 items-center'>
        <Image className='w-12 h-12 rounded-full object-cover' src={user.img ?? placeholder} alt='userimg' width={64} height={64} />
        <div className='flex flex-col'>
          <p className='font-medium tracking-[0.015em]'>{user.First_Name + ' ' + user.Last_Name}</p>
          <p className='opacity-60 text-sm tracking-wide'>@{user.user}</p>
        </div>
      </div>
      <div>
        <Link className='py-2 px-4 bg-[#ebeff0] rounded-l-full rounded-r-full text-black font-medium' href={`user/${user.user}`}>Ver Perfil</Link>
      </div>
    </div>
  )
}
