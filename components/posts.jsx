/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import Comment from '../components/comment'
import { LikeButtonComponent } from '../components/like'

export default function Posts ({ posts }) {
  return posts.map((post) => (
    <div className='flex flex-col px-5 pt-3 w-[90%] sm:w-[440px] xl:w-[430px] border-solid border rounded-md mb-5 border-gray-900' key={post.Post_ID}>
      <div className='flex gap-3 items-center'>
        <Link href={`/user/${post.userModel.user}`}>
          <img className='rounded-full w-12 h-12 sm:w-14 sm:h-14' src={post.userModel.img} alt='user' />
        </Link>
        <div className='py-1 h-14 sm:h-16'>
          <Link href={`/user/${post.userModel.user}`}>
            <p className='font-medium text-lg'>{post.userModel.First_Name + ' ' + post.userModel.Last_Name}</p>
            <p className='text-sm'>{post.Location}</p>
          </Link>
        </div>
      </div>
      <Link href={`/post/${post.Post_ID}`}>
        <h2 className='my-3'>{post.description}</h2>
        <img width={400} height={500} className='object-cover rounded-md w-[525px] h-[300px]' src={post.img} alt='post image' />
      </Link>
      <div className='pt-4 flex gap-3'>
        <LikeButtonComponent />
        {
            post.reactionModels ? post.reactionModels.length > 1 ? <p>{post.reactionModels.length} reactions</p> : <p>{post.reactionModels.length} reaction</p> : <p>Without reactions yet</p>
          }
      </div>
      <div className='py-3 flex flex-col gap-3'>
        <Comment />
        {
            post.commentModels.length > 0 ? <Link href={`post/${post.Post_ID}/comments`}> <p> Show comments</p> </Link> : <p>Without comments yet</p>
          }
      </div>
    </div>
  ))
}
