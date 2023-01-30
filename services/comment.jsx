import axios from 'axios'

const API_URL = 'https://ourspace-api-hw4y.onrender.com'

export const addComent = async (comment) => {
  return axios
    .post(
      `${API_URL}/comments/add`, comment, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
