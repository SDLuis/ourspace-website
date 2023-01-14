'use client'

import UseSearchUser from '../hooks/useSeachUser'
import { Search } from './icons'

export default function SearchBar () {
  const { FindUsers, users, inputValue } = UseSearchUser()
  console.log(users)
  return (
    <form onSubmit={e => FindUsers(e)} className='w-[95%] h-9 bg-[#17181c] rounded-l-full rounded-r-full flex items-center px-2'>
      <button type='submit'>
        <Search />
      </button>
      <input ref={inputValue} type='text' className='bg-[#17181c] ml-2 font-medium flex-1 outline-none' />
    </form>
  )
}
