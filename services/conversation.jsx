import axios from 'axios'

const API_URL = 'https://ourspace-api.up.railway.app'

export const getOwnConversation = async () => {
  return axios
    .get(
      `${API_URL}/conversations/owner`, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
