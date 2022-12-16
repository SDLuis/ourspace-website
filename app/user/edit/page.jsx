'use client'
import UserLogged from '../../../hooks/userLogged'
import UserEdit from '../../../components/useredit'

export default function Page () {
  const { userFound } = UserLogged()

  return (
    <UserEdit user={userFound} />
  )
}
