import axios from 'axios'
import Link from 'next/link'
import Comment from '../../../components/comment'
import { LikeButtonComponent } from '../../../components/like'
import { Back } from '../../../components/icons'
import UserOnPost from '../../../components/useronpost'
import UserImg from '../../../components/userimg'
import Image from 'next/image'

export default async function Post ({ params, children }) {
  const { id } = params
  const host = 'https://ourspace-api.up.railway.app'

  async function findPost () {
    return await axios.get(`${host}/posts/${id}`, { next: { revalidate: 10 } })
  }

  const post = await (await findPost()).data

  return (
    <main className='w-screen min-h-screen flex justify-center text-white'>
      <div className='w-full flex flex-col p-4 mb-1 relative items-center sm:w-[598px] md:w-[470px] lg:w-[598px] sm:border-x sm:border-b border-solid sm:border-gray-700'>
        <div className='w-full flex gap-2'>
          <Link className='absolute top-2 left-0 sm:-left-8' href='/home'><Back /></Link>
          <div className='w-12 h-12 sm:w-14 sm:h-14'><UserImg post={post} /></div>
          <div className='w-full flex flex-[2]'>
            <div className='flex flex-col w-full'>
              <UserOnPost post={post}>
                <h2>{post.description}</h2>
              </UserOnPost>
              {post.img
                ? <Image width={400} height={500} className='object-cover rounded-lg w-full h-[200px] sm:h-[300px]' src={post.img} alt='post image' />
                : null}
              <div>
                <div className={`${post.img ? 'pt-4' : ''} flex gap-3`}>
                  <LikeButtonComponent />
                  {
              post.reactionModels ? post.reactionModels.length > 1 ? <p>{post.reactionModels.length} reactions</p> : <p>{post.reactionModels.length} reaction</p> : <p>Without reactions yet</p>
            }
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
        </div>
        <div className='w-full mt-2'>
          {children}
        </div>
      </div>
    </main>
  )
}
