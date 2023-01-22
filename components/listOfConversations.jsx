/* eslint-disable no-unused-expressions */
'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Conversation from './conversation'
import UserLogged from '../hooks/userLogged'

export default function ListOfConversations () {
  const { userFound } = UserLogged()
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    userFound ? axios.get('https://ourspace-api.up.railway.app/conversations/owner', { withCredentials: true }).then(({ data }) => setConversations(data)) : null
  }, [userFound])

  return (
    <div className='w-screen px-20 pt-10 flex flex-col gap-4'>
      {conversations?.map((conversation) => (
        <Conversation key={conversation.Conversation_ID} conversation={conversation} />
      ))}
    </div>
  )
}
