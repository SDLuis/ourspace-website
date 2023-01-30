'use client'
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react'
import UserLogged from './userLogged'
import { findUserById } from '../services/user'

export default function Conversation ({ conversation = null } = {}) {
  const [friend, setFriend] = useState(null)

  const { userFound } = UserLogged()

  useEffect(() => {
    const friendId = userFound ? conversation?.members?.find((m) => m !== userFound?.User_ID) : null
    friendId
      ? findUserById(friendId).then(({ data }) => setFriend(data))
      : null
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userFound])

  return { friend }
}
