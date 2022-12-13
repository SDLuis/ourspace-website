/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserLogged from './userLogged'

export default function Reaction (postID) {
  const { userFound } = UserLogged()
  const [reactions, setReactions] = useState([])
  const [liked, setLiked] = useState(false)
  const filterLikes = reactions?.filter((item) => (item.User_ID === userFound?.User_ID))

  useEffect(() => {
    postID ? axios.get(`https://ourspace-api.up.railway.app/reactions/find/${postID}`).then((res) => { setReactions(res.data) }) : null
    if (filterLikes.length > 0) {
      setLiked(true)
    } else {
      setLiked(false)
    }
    console.log(reactions)
  }, [postID])

  const AddReaction = (PostID) => {
    if (userFound) {
      if (!liked) {
        const body = {
          Post_ID: PostID,
          reactionType: 'Like'
        }
        setLiked(true)
        axios.post('https://ourspace-api.up.railway.app/reactions/add', body, { withCredentials: true }).then(() => {
          setReactions([...reactions, { ...body }])
        })
      } else {
        axios.delete(`https://ourspace-api.up.railway.app/reactions/delete/${postID}`, { withCredentials: true }).then(() => {
          const newReactionsObject = reactions.filter((reaction) => reaction.Reaction_ID !== reactions.Reaction_ID)
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
