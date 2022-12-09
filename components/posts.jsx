/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import Image from 'next/image'
import Comment from '../components/comment'
import { LikeButtonComponent } from '../components/like'
import UserImg from './userimg'
import UserOnPost from './useronpost'

export default function Posts ({ posts }) {
  return posts.map((post) => (
    <div className='flex gap-2 w-full border-t border-gray-700 p-4 mb-1 ' key={post.Post_ID}>
      <div className='w-12 h-12 sm:w-14 sm:h-14'><UserImg post={post} /></div>
      <div className='flex-[2]'>
        <UserOnPost post={post}>
          <Link href={`/post/${post.Post_ID}`}>
            <h2>{post.description}</h2>
          </Link>
        </UserOnPost>
        <Link href={`/post/${post.Post_ID}`}>
          {post.img
            ? <Image width={400} height={500} className='object-cover rounded-lg w-full h-[200px] sm:h-[300px]' src={post.img} alt='post image' />
            : null}
        </Link>
        <div>
          <div className={`${post.img ? 'pt-4' : ''} flex gap-3`}>
            <LikeButtonComponent />
            {
            post.reactionModels ? post.reactionModels.length > 1 ? <p>{post.reactionModels.length} reactions</p> : <p>{post.reactionModels.length} reaction</p> : <p>Without reactions yet</p>
          }
          </div>
          <div className='pt-3 flex flex-col gap-3'>
            <Comment />
            {
            post.commentModels.length > 0 ? <Link href={`post/${post.Post_ID}/comments`}> <p> Show comments</p> </Link> : <p>Without comments yet</p>
          }
          </div>
        </div>
      </div>
    </div>
  ))
}
