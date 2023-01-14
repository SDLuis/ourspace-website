'use client'

import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = 'https://ourspace-api.up.railway.app'

export const getUser = async () => {
  return await axios
    .get(
      `${API_URL}/users`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      toast.error(`${err}`)
    })
}

export const findUser = async (user) => {
  return await axios
    .get(
      `${API_URL}/users/find/${user}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      toast.error(`${err}`)
    })
}

export const findUsers = async (user) => {
  return await axios
    .get(
      `${API_URL}/users/search/${user}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      toast.error(`${err}`)
    })
}

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
