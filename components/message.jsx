/* eslint-disable no-unused-expressions */
'use client'

import Image from 'next/image'
import placeholder from '../public/placeholder-user.jpg'
import Loading from './loading'
import { Send } from './icons'
import TextareaAutosize from 'react-textarea-autosize'
import useMessage from '../hooks/useMessage'

export default function Message ({ ConversationID = null }) {
  const { loading, messages, userFound } = useMessage({ ConversationID })

  if (ConversationID && loading) return <div className='w-full h-full rounded-md bg-black grid place-items-center'><div className='w-10 h-10'><Loading /></div></div>
  return (
    <div className='w-full h-full relative rounded-md bg-black py-6 px-20'>
      {
        messages?.map((message) => (
          <div className={`w-full flex gap-1.5 ${message?.userModel.User_ID === userFound?.User_ID ? '' : 'flex-row-reverse'}`} key={message.Message_ID}>
            <Image className='w-10 h-10 rounded-full object-cover' src={message.userModel.img ?? placeholder} width={64} height={64} alt='user' />
            <p className={`h-10 rounded-md p-4 flex items-center font-medium text-[#f2f2f2] ${message?.userModel.User_ID === userFound?.User_ID ? 'bg-sky-700' : 'bg-gray-700'}`}>{message.description}</p>
          </div>
        ))
      }
      <div className={` ${!ConversationID ? 'hidden' : ''} absolute flex gap-2 bottom-2 w-full left-0 right-0 px-2`}>
        <TextareaAutosize className='w-full min-h-[90px] max-h-[90px] rounded-r-md outline-none rounded-l-md px-2 py-1 font-medium resize-none' />
        <button><Send /></button>
      </div>
    </div>
  )
}
