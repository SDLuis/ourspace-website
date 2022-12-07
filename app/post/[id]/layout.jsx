import axios from 'axios'
import Link from 'next/link'
import Comment from '../../../components/comment'
import { LikeButtonComponent } from '../../../components/like'
import { Back } from '../../../components/icons'
import UserOnPost from '../../../components/useronpost'
import Image from 'next/image'

export default async function Post ({ params, children }) {
  const { id } = params
  const host = 'https://ourspace-api.up.railway.app'

  async function findPost () {
    return await axios.get(`${host}/posts/${id}`, { next: { revalidate: 10 } })
  }

  const post = await (await findPost()).data

  return (
    <main className='w-full min-h-screen flex justify-center text-white'>
      <div className='w-full mb-5 flex relative justify-center sm:w-[598px] md:w-[470px] lg:w-[598px] sm:border-x sm:border-b border-solid sm:border-gray-700'>
        <Link className='absolute top-2 left-0 sm:-left-8' href='/home'><Back /></Link>
        <div className='pt-3 w-full flex flex-col items-center'>
          <div className='flex flex-col w-full'>
            <div className='ml-5'>
              <UserOnPost post={post} />
            </div>
            <h2 className='my-3 ml-3'>{post.description}</h2>
            <Image width={400} height={500} className='object-cover w-full h-[400px] sm:h-[300px]' src={post.img} alt='post image' />
            <div className='px-2'>
              <div className='pt-4 flex gap-3'>
                <LikeButtonComponent />
                {
              post.reactionModels ? post.reactionModels.length > 1 ? <p>{post.reactionModels.length} reactions</p> : <p>{post.reactionModels.length} reaction</p> : <p>Without reactions yet</p>
            }
              </div>
            </div>
            <div className='pt-4 flex flex-col gap-3'>
              <div className='w-full px-2'>
                <Comment />
              </div>
              {
              post.commentModels.length > 0 ? <Link href={`post/${post.Post_ID}/comments`}> <p className='px-2'> Show comments</p> </Link> : <p className='ml-2 px-2'>Without comments yet</p>
            }
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
