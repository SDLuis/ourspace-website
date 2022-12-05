/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Link from 'next/link'
import Comment from '../../../components/comment'
import { LikeButtonComponent } from '../../../components/like'
import { Back } from '../../../components/icons'

export default async function Post ({ params, children }) {
  const { id } = params
  const host = 'https://ourspace-api.up.railway.app'

  async function findPost () {
    return await axios.get(`${host}/posts/${id}`, { next: { revalidate: 10 } })
  }

  const post = await (await findPost()).data

  return (
    <div className='sm:px-8 px-0'>
      <main className='w-full flex justify-center text-white'>
        <div className='w-full min-h-screen flex relative justify-center sm:w-[598px] md:w-[470px] lg:w-[598px] sm:border-x border-solid sm:border-gray-900'>
          <div className='py-5'>
            <Link className='absolute top-7 left-6 sm:left-10' href='/home'><Back /></Link>
          </div>
          <div className='py-5 flex flex-col items-center'>
            <div className='flex flex-col px-5 pt-3 w-[90%] sm:w-[440px] xl:w-[430px] border-solid border rounded-md mb-5 border-gray-900'>
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
              post.commentModels.length > 0 ? <Link href={`post/${post.Post_ID}/comments`}> <p> Show comments</p> </Link> : <p>Without comments yet</p>
            }
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
