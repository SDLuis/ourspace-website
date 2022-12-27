/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserLogged from './userLogged'

export default function Reaction (postID) {
  let ID
  let UserLiked
  const { userFound } = UserLogged()
  const [reactions, setReactions] = useState([])
  const [liked, setLiked] = useState(false)

  const filterLikes = reactions?.filter((item) => (item.User_ID === userFound?.User_ID))
  reactions.length > 0 ? ID = reactions[0].Reaction_ID : null

  if (filterLikes.length > 0) {
    UserLiked = true
  } else {
    UserLiked = false
  }

  useEffect(() => {
    setLiked(UserLiked)
    postID ? axios.get(`http://localhost:5000/reactions/find/${postID}`).then((res) => { setReactions(res.data) }) : null
  }, [postID, UserLiked])

  const AddReaction = (PostID) => {
    if (userFound) {
      if (!liked) {
        const body = {
          Post_ID: PostID,
          reactionType: 'Like',
          User_ID: userFound.User_ID
        }
        setLiked(true)
        axios.post('http://localhost:5000/reactions/add', body, { withCredentials: true }).then(() => {
          setReactions([...reactions, { ...body }])
        })
      } else {
        axios.delete(`http://localhost:5000/reactions/delete/${ID}`, { withCredentials: true }).then(() => {
          const newReactionsObject = reactions.filter((reaction) => reaction.Reaction_ID !== reactions[0].Reaction_ID)
          setReactions(newReactionsObject)
        })
        setLiked(false)
      }
    } else {
      window.location.href = '/login'
    }
  }

  return { reactions, AddReaction, liked }
}
