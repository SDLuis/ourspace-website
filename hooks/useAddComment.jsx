'use client'
import { useRef } from 'react'
import { addComent } from '../services/comment'
import { toast } from 'react-hot-toast'
import UserLogged from './userLogged'

export default function UseAddComment ({ PostID }) {
  const { userFound } = UserLogged()
  const comment = useRef('')
  function AddComment () {
    if (userFound) {
      const body = {
        Post_ID: PostID,
        description: comment.current.value
      }
      addComent(body)
        .then(() => {
          toast.success('Se ha añadido tu comentario!')
          window.location.href = `/post/${PostID}/comments`
        })
        .catch(err => toast.error(`${err}`))
    } else {
      window.location.href = '/login'
    }
  }
  return { comment, AddComment }
}
