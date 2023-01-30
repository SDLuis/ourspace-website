import axios from 'axios'

const host = 'https://ourspace-api-hw4y.onrender.com'

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

export const addPost = async (post) => {
  return axios
    .post(
      `${host}/posts/add`, post, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export function deletePost (PostID) {
  const apiURL = `${host}/posts/delete/${PostID}`

  return axios.delete(apiURL, { withCredentials: true }).then(res => { return res })
}
