/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Link from 'next/link'
import { Back } from '../../../components/icons'

export default async function User ({ params }) {
  const { user } = params
  const host = 'https://ourspace-api.up.railway.app'

  async function findUser () {
    return await axios.get(`${host}/users/find/${user}`, { next: { revalidate: 10 } })
  }
  async function findPosts () {
    return await axios.get(`${host}/posts/user/${user}`, { next: { revalidate: 10 } })
  }

  const foundUser = await (await findUser()).data
  const foundPosts = await (await findPosts(user)).data
  console.log(foundPosts)

  return (
    <div className='px-4 w-full md:px-[13%]'>
      <div className='flex flex-col w-full items-center border-x border-b py-2 min-h-screen border-solid border-gray-400  pb-6'>
        <div className='flex justify-start w-[80%] sm:w-[598px]'>
          <div className='flex items-center h-8 gap-6 sm:gap-10 py-10'>
            <Link className='' href='/home'><Back /></Link>
            <p className='text-2xl font-semibold -mt-1'>User</p>
          </div>
        </div>
        <div className='relative w-[80%] sm:w-[598px] h-[60%] sm:h-[280px]'>
          <img className='w-full sm:w-[598px] h-[60%] sm:h-[280px] object-cover rounded-md relative' alt='portada' src='https://img.freepik.com/vector-gratis/conjunto-portadas-arte-abstracto-dibujado-mano_23-2148970324.jpg?w=2000' />
          <div className='w-32 h-32 sm:w-44 sm:h-44 bg-gray-200 flex justify-center items-center rounded-full absolute -bottom-16 sm:-bottom-20 left-0 right-0 m-auto'><img className='w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover' alt='userphoto' src={foundUser.img} /></div>
        </div>
        <div className='mt-[68px] sm:mt-[84px]'>
          <p className='text-center text-gray-200 font-medium text-xl'>{`${foundUser.First_Name} ${foundUser.Last_Name}`}</p>
        </div>
      </div>
    </div>
  )
}
