'use client'

import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = 'https://ourspace-api.up.railway.app'

export const editUser = async (body, id) => {
  return await axios
    .put(
      `${API_URL}/users/edit/${id}`, body, { withCredentials: true })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      toast.error(`${err}`)
    })
}

export const editCoverUser = async (body, id) => {
  return await axios
    .put(
      `${API_URL}/users/cover/${id}`, body, { withCredentials: true })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      toast.error(`${err}`)
    })
}
