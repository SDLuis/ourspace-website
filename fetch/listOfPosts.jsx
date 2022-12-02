/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Link from 'next/link'
import Comment from '../components/comment'
import { LikeButtonComponent } from '../components/like'

const host = 'https://ourspace-api.up.railway.app'

async function fetchPosts () {
  return await axios.get(`${host}/posts`, { next: { revalidate: 10 } })
}

export default async function Posts () {
  const posts = await (await fetchPosts()).data

  return (
    posts.map((post) => (
      <div className='flex flex-col p-5 w-[90%] sm:w-[440px] xl:w-[430px] border-solid border rounded-md mb-5 border-gray-500' key={post.Post_ID}>
        <Link href={`/user/${post.userModel.user}`}>
          <div className='flex gap-3'>
            <div className='rounded-full w-16 h-16 bg-gray-50 grid place-items-center'>
              <img className='rounded-full w-[88%] h-[88%]' src={`https://i.pravatar.cc/150?u=${post.userModel.user}`} alt='user' />
            </div>
            <div className='py-2 h-16'>
              <p className='font-medium text-lg'>{post.userModel.First_Name + ' ' + post.userModel.Last_Name}</p>
              <p className='text-sm'>{post.Location}</p>
            </div>
          </div>
        </Link>
        <h2 className='my-3'>{post.description}</h2>
        <img width={400} height={500} className='object-cover rounded-md w-[525px] h-[300px]' src={post.img} alt='post image' />
        <div className='pt-4 flex gap-3'>
          <LikeButtonComponent />
          {
              post.reactionModels ? post.reactionModels.length > 1 ? <p>{post.reactionModels.length} reactions</p> : <p>{post.reactionModels.length} reaction</p> : <p>Without reactions yet</p>
            }
        </div>
        <div className='pt-4 flex flex-col gap-3'>
          <Comment />
          {
              post.commentModels.length > 0 ? <Link href='/'> <p> Show comments</p> </Link> : <p>Without comments yet</p>
            }
        </div>
      </div>
    ))
  )
}
