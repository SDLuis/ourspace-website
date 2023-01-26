/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserLogged from './userLogged'

export default function useMessage ({ ConversationID = null } = {}) {
  const { userFound } = UserLogged()
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    userFound ? axios.get('https://ourspace-api-hw4y.onrender.com/conversations/owner', { withCredentials: true }).then(({ data }) => setConversations(data)) : null
  }, [userFound])

  useEffect(() => {
    setMessages([])
    setLoading(true)
    ConversationID ? axios.get(`https://ourspace-api-hw4y.onrender.com/messages/find/${ConversationID}`, { withCredentials: true }).then(({ data }) => { setMessages(data) }).finally(setTimeout(() => { setLoading(false) }, 600)) : null
  }, [ConversationID])
  return { conversations, messages, loading, userFound }
}
