'use client'
import Link from 'next/link'
import Image from 'next/image'
import Comment from '../components/comment'
import LikeButtonComponent from '../components/like'
import PostDate from '../components/postdate'
import MenuOptions from './menuoptions'
import UserImg from './userimg'
import UserOnPost from './useronpost'

export default function Posts ({ posts, userLogged = '', removePost = null }) {
  const OwnerPost = (userModel) => {
    if (userModel.User_ID === userLogged?.User_ID) { return false } else { return true }
  }
  return posts.map((post) => (
    <div className='flex gap-3 w-full relative border-t border-gray-700 pt-4 pb-5 p-4 hover:bg-[#f7f7f7] transition-all ease-in-out duration-150 dark:hover:bg-[#080808]' key={post.Post_ID}>
      <div className='w-12 h-12 sm:w-14 sm:h-14'><UserImg post={post} /></div>
      <div className='flex-[2]'>
        <UserOnPost post={post}>
          <Link href={`/post/${post.Post_ID}`}>
            <h2>{post.description}</h2>
          </Link>
        </UserOnPost>
        <Link href={`/post/${post.Post_ID}`}>
          {post.img
            ? <div className='w-full pr-1'><Image width={400} height={500} className='object-cover rounded-xl min-w-[100%] h-auto max-h-[500px]' src={post.img} alt='post image' /></div>
            : null}
        </Link>
        <div>
          <div className={`${post.img ? 'pt-4' : ''} flex justify-between w-[92%]`}>
            <LikeButtonComponent post={post} />
            <PostDate date={post.createdAt} />
          </div>
          <div className='pt-3 flex flex-col gap-3'>
            <Comment PostID={post.Post_ID} />
            {
            post.commentModels.length > 0 ? <Link href={`post/${post.Post_ID}/comments`}> <p>Mostrar comentarios</p> </Link> : <p>Sin comentarios aún</p>
          }
          </div>
        </div>
      </div>
      <MenuOptions OwnerPost={OwnerPost} post={post} removePost={removePost} />
    </div>
  ))
}
