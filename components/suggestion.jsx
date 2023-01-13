'use client'
import NewUser from './newuser'
import UseUsers from '../hooks/useNewUser'
import Loading from './loading'

export default function Suggeration () {
  const { othersUsers, loading } = UseUsers()
  return (
    <div className='w-[95%] flex flex-col h-screen items-center justify-start rounded-md'>
      <div className='p-3 bg-[#17181c] w-full rounded-md flex flex-col gap-5'>
        <p className='text-xl font-bold text-[#f2f2f2]'>Nuevos usuarios</p>
        {loading
          ? <div className='w-full h-full flex justify-center items-center'> <Loading /> </div>
          : othersUsers.map((user) => (
            <NewUser key={user.User_ID} user={user} />
          ))}
      </div>
    </div>
  )
}
