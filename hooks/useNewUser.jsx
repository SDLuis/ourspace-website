/* eslint-disable no-unused-expressions */
'use client'

import { useState, useEffect } from 'react'
import { getUser } from '../services/user'
import UserLogged from './userLogged'

export default function UseUsers () {
  const [users, setUsers] = useState([])
  const { userFound } = UserLogged()
  const [loading, setLoading] = useState(true)

  const othersUsers = users?.length ? users.filter((user) => user.User_ID !== userFound?.User_ID) : null

  useEffect(() => {
    getUser().then((res) => setUsers(res))
    userFound ? setLoading(false) : null
  }, [userFound])

  return { othersUsers, loading }
}
