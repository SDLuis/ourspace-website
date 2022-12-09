import Link from 'next/link'
import Image from 'next/image'
import placeholder from '../public/placeholder-user.jpg'

export default function UserImg ({ post: { userModel } }) {
  const img = !userModel.img ? placeholder : userModel.img

  return (
    <Link href={`/user/${userModel.user}`}>
      <Image width={48} height={48} className='rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover' src={img} alt='user' />
    </Link>
  )
}
