/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { findUser } from '../services/user'
import UseUser from './useLogin'

export default function UserLogged () {
  const [userFound, setUserLogged] = useState('')
  const [loading, setLoading] = useState(true)
  const { userLogged, logout } = UseUser()
  useEffect(() => {
    userLogged().then((user) => {
      user ? findUser(user.user).then((res) => setUserLogged(res)).finally(setLoading(false)) : null
    })
  }, [])

  return { userFound, logout, loading }
}
