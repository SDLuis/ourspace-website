'use client'
import { useRef } from 'react'
import axios from 'axios'
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
      axios.post('https://ourspace-api-hw4y.onrender.com/comments/add', body, { withCredentials: true })
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
