/* eslint-disable no-unused-expressions */
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import UserLogged from './userLogged'
import { toast } from 'react-hot-toast'

export default function useMessage ({ ConversationID = null } = {}) {
  const { userFound } = UserLogged()
  const scrollRef = useRef()
  const [messages, setMessages] = useState([])
  const description = useRef(null)
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

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function sendMessage () {
    const body = {
      Conversation_ID: ConversationID,
      Sender_ID: UserLogged?.User_ID,
      description: description?.current?.value
    }
    description?.current?.value ? axios.post('https://ourspace-api-hw4y.onrender.com/messages/add', body, { withCredentials: true }).then(() => { description.current.value = '' }) : toast.error('Escriba un mensaje')
  }
  return { conversations, messages, loading, userFound, sendMessage, description, scrollRef }
}
