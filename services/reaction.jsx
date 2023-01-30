import axios from 'axios'

const API_URL = 'https://ourspace-api-hw4y.onrender.com'

export const addReaction = async (reaction) => {
  return axios
    .post(
      `${API_URL}/reactions/add`, reaction, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export const removeReaction = async (reactionID) => {
  return axios
    .delete(
      `${API_URL}/reactions/delete/${reactionID}`, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export const findReactionByPostId = async (postID) => {
  return axios
    .get(
      `${API_URL}/reactions/find/${postID}`, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
