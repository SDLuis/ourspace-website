import { useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

export default function UseAddComment ({ PostID }) {
  const comment = useRef('')
  function AddComment () {
    console.log(comment.current.value, PostID)
    const body = {
      Post_ID: PostID,
      description: comment.current.value
    }
    axios.post('https://ourspace-api.up.railway.app/comments/add', body, { withCredentials: true })
      .then(() => {
        toast.success('Se ha añadido tu comentario!')
        window.location.href = '/'
      })
      .catch(err => toast.error(`${err}`))
  }
  return { comment, AddComment }
}
