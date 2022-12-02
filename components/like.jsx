'use client'

import { useState } from 'react'
import { Like } from './icons'

export function LikeButtonComponent () {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => { setLiked(!liked) }}>
      <Like like={liked} />
    </button>
  )
}
