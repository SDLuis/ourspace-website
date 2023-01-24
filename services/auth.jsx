'use client'

import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = 'https://ourspace-api-hw4y.onrender.com'

export const Login = async (user, password) => {
  return await axios
    .post(
      `${API_URL}/auth/login`,
      {
        user,
        password
      },
      { withCredentials: true }
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      toast.error(`${err}`)
    })
}

export const register = async (body) => {
  return await axios
    .post(`${API_URL}/auth/register`, body)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      toast.error(`${err}`)
    })
}
