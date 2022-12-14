/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import axios from 'axios'
import UseUser from './login'

export default function UserLogged () {
  const [userFound, setUserLogged] = useState('')
  const [loading, setLoading] = useState(false)
  const { userLogged, logout } = UseUser()
  useEffect(() => {
    setLoading(true)
    userLogged().then((user) => {
      user ? axios.get(`https://ourspace-api.up.railway.app/users/find/${user.user}`).then(({ data }) => setUserLogged(data)).finally(setLoading(false)) : null
    })
  }, [])

  return { userFound, logout, loading }
}
