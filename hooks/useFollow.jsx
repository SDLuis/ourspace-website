/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserLogged from './userLogged'
import { toast } from 'react-hot-toast'

export default function Follower (UserID) {
  let ID
  let UserFollow
  const { userFound } = UserLogged()
  const [followers, setFollowers] = useState([])
  const [follow, setFollow] = useState(false)

  const filterFollowers = followers?.filter((item) => (item.Follower_ID === userFound?.User_ID))
  followers.length > 0 ? ID = followers[0].ID : null

  if (filterFollowers.length > 0) {
    UserFollow = true
  } else {
    UserFollow = false
  }

  useEffect(() => {
    setFollow(UserFollow)
    UserID ? axios.get('https://ourspace-api.up.railway.app/followers/owner', { withCredentials: true }).then((res) => { setFollowers(res.data) }) : null
  }, [UserID, UserFollow])

  const AddFollow = (UserID) => {
    if (userFound) {
      if (!follow) {
        const body = {
          User_ID: UserID
        }
        setFollow(true)
        axios.post('https://ourspace-api.up.railway.app/followers/add', body, { withCredentials: true }).then(({ data }) => {
          setFollowers([...followers, { ...body }])
          toast.success('Empezaste a seguir a este usuario')
        })
      } else {
        axios.delete(`https://ourspace-api.up.railway.app/followers/delete/${ID}`, { withCredentials: true }).then(({ data }) => {
          const newFollowerObject = followers.filter((follower) => follower.Follower_ID !== followers[0].Follower_ID)
          setFollowers(newFollowerObject)
          toast.success(data)
        })
        setFollow(false)
      }
    } else {
      window.location.href = '/login'
    }
  }

  return { followers, AddFollow, follow }
}
