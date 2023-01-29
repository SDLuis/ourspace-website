/* eslint-disable no-unused-expressions */
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import UserLogged from './userLogged'
import { io } from 'socket.io-client'

export default function useMessage ({ currentConversation = null } = {}) {
  const PORT = process.env.PORT || 5000
  const { userFound } = UserLogged()
  const scrollRef = useRef()
  const [messages, setMessages] = useState([])
  const description = useRef(null)
  const [loading, setLoading] = useState(true)
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const [conversations, setConversations] = useState([])
  const socket = useRef()

  useEffect(() => {
    userFound ? axios.get('https://ourspace-api-hw4y.onrender.com/conversations/owner', { withCredentials: true }).then(({ data }) => setConversations(data)) : null
  }, [userFound])

  useEffect(() => {
    setMessages([])
    setLoading(true)
    currentConversation?.Conversation_ID ? axios.get(`https://ourspace-api-hw4y.onrender.com/messages/find/${currentConversation?.Conversation_ID}`, { withCredentials: true }).then(({ data }) => { setMessages(data) }).finally(setTimeout(() => { setLoading(false) }, 600)) : null
  }, [currentConversation?.Conversation_ID])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    socket.current = io(`ws://localhost:${PORT}`)
    userFound ? socket.current.emit('addUser', userFound?.User_ID) : null
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        Sender_ID: data.Sender_ID,
        description: data.description,
        userModel: { img: data?.img },
        createdAt: Date.now()
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userFound])

  useEffect(() => {
    arrivalMessage &&
      currentConversation?.members.includes(arrivalMessage.Sender_ID) &&
      setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentConversation])

  const sendMessage = async () => {
    const message = {
      Conversation_ID: currentConversation?.Conversation_ID,
      Sender_ID: UserLogged?.User_ID,
      description: description?.current?.value
    }

    try {
      const res = await axios.post('https://ourspace-api-hw4y.onrender.com/messages/add', message, { withCredentials: true })
      let messageWithUserInfo = {}
      messageWithUserInfo = res.data
      messageWithUserInfo.userModel = { img: userFound?.img }
      setMessages([...messages, messageWithUserInfo])
    } catch (err) {
      console.log(err)
    }

    const receiverId = currentConversation?.members.find(
      (member) => member !== userFound.User_ID
    )

    receiverId
      ? socket.current.emit('sendMessage', {
        Sender_ID: userFound.User_ID,
        receiverId,
        img: userFound?.img,
        description: description?.current?.value
      })
      : null
    description.current.value = ''
  }
  return { conversations, messages, loading, userFound, sendMessage, description, scrollRef }
}
