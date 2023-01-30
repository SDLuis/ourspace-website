/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react'
import UserLogged from './userLogged'
import { addReaction, removeReaction, findReactionByPostId } from '../services/reaction'

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
    postID ? findReactionByPostId(postID).then(({ data }) => { setReactions(data) }) : null
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
        addReaction(body).then(() => {
          setReactions([...reactions, { ...body }])
        })
      } else {
        removeReaction(ID).then(() => {
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
