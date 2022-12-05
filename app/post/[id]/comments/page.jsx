/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Link from 'next/link'

export default async function Post ({ params }) {
  const { id } = params
  const host = 'https://ourspace-api.up.railway.app'

  async function fetchComments () {
    return await axios.get(`${host}/comments/find/${id}`, { next: { revalidate: 10 } })
  }

  const comments = await (await fetchComments()).data

  return (
    <div className=' border-solid border-t w-full border-gray-900'>{
      comments.map((comment) => (
        <div className='flex flex-col p-3 w-full border-solid border-b border-gray-900 ' key={comment.Comment_ID}>
          <Link href={`/user/${comment.userModel.user}`}>
            <div className='flex gap-3'>
              <div className='rounded-full w-12 h-12 bg-gray-50 grid place-items-center'>
                <img className='rounded-full w-[88%] h-[88%]' src={comment.userModel.img} alt='user' />
              </div>
              <div className='h-12'>
                <p className='font-medium'>{comment.userModel.First_Name + ' ' + comment.userModel.Last_Name}</p>
                <h2 className='text-sm'>{comment.description}</h2>
              </div>
            </div>
          </Link>
        </div>
      ))
      }
    </div>
  )
}
