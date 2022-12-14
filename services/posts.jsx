import axios from 'axios'

const host = 'https://ourspace-api.up.railway.app'

export default function getPosts ({
  limit = 6,
  page = 0
} = {}) {
  const apiURL = `${host}/posts?limit=${limit}&offset=${page * limit}`

  return axios.get(apiURL).then(res => { return res })
}

export function getUserPosts ({
  limit = 6,
  page = 0,
  user
} = {}) {
  const apiURL = `${host}/posts/user/${user}?limit=${limit}&offset=${page * limit}`

  return axios.get(apiURL, { withCredentials: true }).then(res => { return res })
}

export function deletePost (PostID) {
  const apiURL = `${host}/posts/delete/${PostID}`

  return axios.delete(apiURL, { withCredentials: true }).then(res => { return res })
}
