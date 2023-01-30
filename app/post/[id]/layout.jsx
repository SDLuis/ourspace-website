import Link from 'next/link'
import Comment from '../../../components/comment'
import LikeButtonComponent from '../../../components/like'
import PostDate from '../../../components/postdate'
import { Back } from '../../../components/icons'
import UserImg from '../../../components/userimg'
import Image from 'next/image'

export default async function Post ({ params, children }) {
  const { id } = params
  const host = 'https://ourspace-api-hw4y.onrender.com'

  async function findPost () {
    return fetch(`${host}/posts/${id}`, { cache: 'no-store' }).then(res => res.json())
  }

  const post = await (await findPost())

  return (
    <main className='w-full min-h-screen flex justify-center text-white'>
      <div className='w-full sm:w-[598px] md:w-[470px] lg:w-[598px] sm:border-x border-solid sm:border-gray-700'>
        <div className='w-full flex flex-col px-4'>
          <div className='flex -ml-1.5 -mt-2 items-center h-8 gap-6 py-7 sm:py-9'>
            <Link className='p-1 hover:bg-gray-900 transition-all ease-in-out rounded-full duration-300' href='/home'><Back /></Link>
            <p className='text-2xl font-semibold -mt-1.5'>Post</p>
          </div>
          <div className='w-full flex flex-col'>
            <div className='flex gap-3'>
              <div className='w-12 h-12 sm:w-14 sm:h-14'><UserImg post={post} /></div>
              <div className='flex flex-col'>
                <div className='h-14 sm:h-16'>
                  <Link className='' href={`/user/${post.userModel.user}`}>
                    <p className='font-medium text-lg text-gray-200'>{post.userModel.First_Name + ' ' + post.userModel.Last_Name}</p>
                  </Link>
                  <p className='text-base text-gray-400'>{post.Location}</p>
                </div>
              </div>
            </div>
            <h2 className='text-lg mb-2'>{post.description}</h2>
            <div className='flex flex-col w-full'>
              {post.img
                ? <Image width={400} height={500} className='object-cover rounded-xl w-full h-auto' src={post.img} alt='post image' />
                : null}
              <div>
                <div className={`${post.img ? 'pt-4' : ''} flex justify-between w-[92%] gap-3`}>
                  <LikeButtonComponent post={post} />
                  <PostDate date={post.createdAt} />
                </div>
              </div>
              <div className='pt-3 flex flex-col gap-3'>
                <Comment PostID={post.Post_ID} />
                {
              post.commentModels.length > 0 ? <Link href={`post/${post.Post_ID}/comments`}> <p> Show comments</p> </Link> : <p>Without comments yet</p>
            }
              </div>
            </div>
          </div>
          <div className='w-full my-2'>
            {children}
          </div>
        </div>
        <div className='w-full border-b border-solid border-gray-700 mb-10' />
      </div>
    </main>
  )
}
