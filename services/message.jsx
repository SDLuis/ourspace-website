import axios from 'axios'

const API_URL = 'https://ourspace-api-hw4y.onrender.com'

export const getMessageByConversation = async (ConversationID) => {
  return axios
    .get(
      `${API_URL}/messages/find/${ConversationID}`, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export const sendMessages = async ({ message }) => {
  return axios
    .post(
      `${API_URL}/messages/add`, message, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
