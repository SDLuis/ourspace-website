'use client'

import { Like } from './icons'
import useReaction from '../fetch/reaction'

export function LikeButtonComponent ({ post }) {
  const { reactions, AddReaction, liked } = useReaction(post.Post_ID)

  return (
    <div className={`${post.img ? 'pt-4' : ''} flex gap-3`}>
      <button onClick={() => { AddReaction(post.Post_ID) }}>
        <Like like={liked} />
      </button>
      {
         post.reactionModels ? reactions.length > 1 ? <p>{reactions.length} reactions</p> : <p>{reactions.length} reaction</p> : <p>Without reactions yet</p>
      }
    </div>

  )
}
