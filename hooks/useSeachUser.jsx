/* eslint-disable no-unused-expressions */
'use client'

import { useRef, useState } from 'react'
import { findUsers } from '../services/user'

export default function UseSearchUser () {
  const [users, setUsers] = useState([])
  const inputValue = useRef(null)

  function FindUsers (e) {
    e.preventDefault()
    inputValue.current.value
      ? findUsers(inputValue.current.value).then((res) => {
        setUsers(res)
      })
      : null
  }
  return { FindUsers, users, inputValue }
}
