import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

export default async function Post ({ params }) {
  const { id } = params
  const host = 'https://ourspace-api-hw4y.onrender.com'

  async function fetchComments () {
    return await axios.get(`${host}/comments/find/${id}`, { next: { revalidate: 10 } })
  }

  const comments = await (await fetchComments()).data

  return (
    comments.map((comment) => (
      <div className='flex flex-col py-3 w-full border-solid border-t border-gray-700 ' key={comment.Comment_ID}>
        <Link href={`/user/${comment.userModel.user}`}>
          <div className='flex gap-3'>
            <Image width={56} height={56} className='rounded-full w-12 h-12 sm:w-14 sm:h-14' src={comment.userModel.img} alt='user' />
            <div className='h-12'>
              <p className='font-medium'>{comment.userModel.First_Name + ' ' + comment.userModel.Last_Name}</p>
              <h2 className='text-sm'>{comment.description}</h2>
            </div>
          </div>
        </Link>
      </div>
    ))
  )
}
