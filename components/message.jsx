/* eslint-disable no-unused-expressions */
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import placeholder from '../public/placeholder-user.jpg'
import UserLogged from '../hooks/userLogged'
import Loading from './loading'

export default function Message ({ ConversationID }) {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const { userFound } = UserLogged()

  useEffect(() => {
    setMessages([])
    setLoading(true)
    ConversationID ? axios.get(`https://ourspace-api-hw4y.onrender.com/messages/find/${ConversationID}`, { withCredentials: true }).then(({ data }) => { setMessages(data) }).finally(setTimeout(() => { setLoading(false) }, 600)) : null
  }, [ConversationID])

  if (ConversationID && loading) return <div className='w-full h-full rounded-md bg-black grid place-items-center'><div className='w-10 h-10'><Loading /></div></div>

  return (
    <div className='w-full h-full rounded-md bg-black py-6 px-20'>
      {
        messages?.map((message) => (
          <div className={`w-full flex gap-1.5 ${message?.userModel.User_ID === userFound?.User_ID ? '' : 'flex-row-reverse'}`} key={message.Message_ID}>
            <Image className='w-10 h-10 rounded-full object-cover' src={message.userModel.img ?? placeholder} width={64} height={64} alt='user' />
            <p className={`h-10 rounded-md p-4 flex items-center font-medium text-[#f2f2f2] ${message?.userModel.User_ID === userFound?.User_ID ? 'bg-sky-700' : 'bg-gray-700'}`}>{message.description}</p>
          </div>
        ))
      }
    </div>
  )
}
