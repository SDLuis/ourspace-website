'use client'

import Image from 'next/image'
import UseConversation from '../hooks/useConversation'
import userPlaceholder from '../public/placeholder-user.jpg'
import Loading from './loading'

export default function Conversation ({ conversation, currentConversation }) {
  const { friend } = UseConversation({ conversation })

  if (!friend) return <div className='w-60 flex justify-center h-16 items-center rounded-md dark:bg-black/10 bg-transparent border border-solid dark:border-gray-700 border-gray-100'> <div className='h-10 w-10'><Loading /></div></div>

  return (
    <div className={`h-16 w-60 rounded-lg bg-black/10 p-3 flex gap-5 items-center border border-solid ${currentConversation?.Conversation_ID === conversation?.Conversation_ID ? 'dark:border-sky-700 border-black' : 'dark:border-gray-700 border-gray-100'}`}>
      <Image className='rounded-full w-11 h-11 object-cover' alt='friend' src={friend?.img ?? userPlaceholder} width={64} height={65} />
      <p className='dark:text-white text-[#121212]'>{`${friend?.First_Name} ${friend?.Last_Name}`}</p>
    </div>
  )
}
