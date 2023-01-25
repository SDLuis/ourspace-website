/* eslint-disable no-unused-expressions */
'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Conversation from './conversation'
import UserLogged from '../hooks/userLogged'
import Message from './message'
import { AddConversation } from './icons'

export default function ListOfConversations () {
  const { userFound } = UserLogged()
  const [conversations, setConversations] = useState([])
  const [currentConversation, setCurrentConversation] = useState([])

  useEffect(() => {
    userFound ? axios.get('https://ourspace-api-hw4y.onrender.com/conversations/owner', { withCredentials: true }).then(({ data }) => setConversations(data)) : null
  }, [userFound])

  return (
    <div className='grid h-[90vh] place-items-center'>
      <div className='w-[80vw] h-[80%] rounded-md p-4 bg-[#121212] flex gap-5 '>
        <div className='flex min-w-[15rem] flex-col gap-3'>
          <div className='h-16 w-60 rounded-lg bg-black/10 p-3 cursor-pointer flex items-center justify-center border border-solid border-gray-700'>
            <AddConversation />
          </div>
          {conversations?.map((conversation) => (
            <div className='cursor-pointer w-60' onClick={() => setCurrentConversation(conversation)} key={conversation.Conversation_ID}>
              <Conversation conversation={conversation} currentConversation={currentConversation} />
            </div>
          ))}
        </div>
        <div className='flex-1'>
          <Message ConversationID={currentConversation?.Conversation_ID} />
        </div>
      </div>
    </div>
  )
}
