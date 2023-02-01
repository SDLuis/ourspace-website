'use client'

import UseSearchUser from '../hooks/useSeachUser'
import { Search } from './icons'
import NewUser from './newuser'

export default function SearchBar () {
  const { FindUsers, users, inputValue } = UseSearchUser()

  return (
    <form onSubmit={e => FindUsers(e)} className='w-[95%] gap-3 flex flex-col justify-center'>
      <div className='w-full flex items-center h-9 px-2 bg-[#f7f7f7] dark:bg-[#17181c] rounded-l-full rounded-r-full'>
        <button type='submit'>
          <Search />
        </button>
        <input ref={inputValue} type='text' placeholder='Buscar usuarios' className='bg-[#f7f9f8] dark:bg-[#17181c] ml-2 font-medium flex-1 outline-none text-black' />
      </div>
      <div className={` ${!users.length ? 'hidden' : ''} w-full flex flex-col gap-4 bg-[#f7f9f8] dark:bg-[#17181c] rounded-md p-3`}>
        {
        users?.map((user) => (
          <NewUser user={user} key={user.User_ID} />
        ))
}
      </div>
    </form>
  )
}
