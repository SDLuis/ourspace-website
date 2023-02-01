'use client'

import { Like } from './icons'
import useReaction from '../hooks/useReaction'

export default function LikeButtonComponent ({ post }) {
  const { reactions, AddReaction, liked } = useReaction(post.Post_ID)

  return (
    <div className='flex gap-3'>
      <button onClick={() => { AddReaction(post.Post_ID) }}>
        <Like like={liked} />
      </button>
      {
         post.reactionModels ? reactions.length > 1 || reactions.length === 0 ? <p className='text-black dark:text-[#f2f2f2]'>{reactions.length} reacciones</p> : <p className='text-black dark:text-[#f2f2f2]'>{reactions.length} reacción</p> : <p className='text-black dark:text-[#f2f2f2]'>Sin reacciones</p>
      }
    </div>

  )
}
