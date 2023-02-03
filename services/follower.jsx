import axios from 'axios'

const API_URL = 'https://ourspace-api.up.railway.app'

export const ownFollows = async () => {
  return axios
    .get(
      `${API_URL}/followers/owner`, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export const addFollow = async (user) => {
  return axios
    .post(
      `${API_URL}/followers/add`, user, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export const removeFollow = async (followID) => {
  return axios
    .delete(
      `${API_URL}/followers/delete/${followID}`, { withCredentials: true })
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
