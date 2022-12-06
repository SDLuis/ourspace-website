import Link from 'next/link'
import Image from 'next/image'
import placeholder from '../public/placeholder-user.jpg'

export default function UserOnPost ({ post }) {
  const img = !post.userModel.img ? placeholder : post.userModel.img
  return (
    <div className='flex gap-3 items-center'>
      <Link href={`/user/${post.userModel.user}`}>
        <Image width={48} height={48} className='rounded-full w-12 h-12 sm:w-14 sm:h-14' src={img} alt='user' />
      </Link>
      <div className='py-1 h-14 sm:h-16'>
        <Link href={`/user/${post.userModel.user}`}>
          <p className='font-medium text-lg'>{post.userModel.First_Name + ' ' + post.userModel.Last_Name}</p>
          <p className='text-sm'>{post.Location}</p>
        </Link>
      </div>
    </div>
  )
}
