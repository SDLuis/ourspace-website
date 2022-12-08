/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import Image from 'next/image'
import Comment from '../components/comment'
import { LikeButtonComponent } from '../components/like'
import UserOnPost from './useronpost'

export default function Posts ({ posts }) {
  return posts.map((post) => (
    <div className='flex flex-col w-full border-t border-gray-700 px-4 mb-1 ' key={post.Post_ID}>
      <div className='px-3 pt-3'>
        <UserOnPost post={post} />
      </div>
      <Link href={`/post/${post.Post_ID}`}>
        <h2 className='my-3 px-2'>{post.description}</h2>
        <Image width={400} height={500} className='object-cover rounded-lg w-full h-[400px] sm:h-[300px]' src={post.img} alt='post image' />
      </Link>
      <div className='px-2'>
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
    </div>
  ))
}
