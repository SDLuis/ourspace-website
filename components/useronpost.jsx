import Link from 'next/link'

export default function UserOnPost ({ post, children }) {
  return (
    <div className='h-14 sm:h-16'>
      <div className='flex gap-2 items-start'>
        <Link className='' href={`/user/${post.userModel.user}`}>
          <p className='font-medium text-lg text-gray-200'>{post.userModel.First_Name + ' ' + post.userModel.Last_Name}</p>
        </Link>
        <p className='text-sm mt-1 text-gray-400'>{post.Location}</p>
      </div>
      {children}
    </div>
  )
}
