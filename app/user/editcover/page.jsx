'use client'
import UserLogged from '../../../hooks/userLogged'
import EditCover from '../../../components/editcover'
import Loading from '../../../components/loading'

export default function Page () {
  const { userFound, loading } = UserLogged()

  if (loading) return <div className='h-screen grid place-items-center'> <Loading /></div>
  return (
    <EditCover user={userFound} />
  )
}
