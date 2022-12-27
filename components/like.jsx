'use client'

import { Like } from './icons'
import useReaction from '../hooks/useReaction'

export default function LikeButtonComponent ({ post }) {
  const { reactions, AddReaction, liked } = useReaction(post.Post_ID)

  return (
    <div className={`${post.img ? 'pt-4' : ''} flex gap-3`}>
      <button onClick={() => { AddReaction(post.Post_ID) }}>
        <Like like={liked} />
      </button>
      {
         post.reactionModels ? reactions.length > 1 || reactions.length === 0 ? <p>{reactions.length} reacciones</p> : <p>{reactions.length} reacción</p> : <p>Sin reacciones</p>
      }
    </div>

  )
}
