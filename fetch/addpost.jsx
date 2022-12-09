/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import UseUser from './login'

export default function UseAddPost () {
  const { userLogged } = UseUser()
  const description = useRef('')
  const postType = useRef('')
  const inputImg = useRef('')
  const city = useRef('')
  const [user, setUser] = useState('')
  const [postImg, setPostImg] = useState([])
  const [country, setcountry] = useState('')
  const [Cities, setCities] = useState([])
  useEffect(() => {
    userLogged().then(data => setUser(data))
    country
      ? axios.get(`https://country-api.up.railway.app/country/${country}`, { cache: 'force-cache' }).then(({ data }) => { setCities(data) })
      : null
  }, [country])

  const Location = () => {
    if (country) {
      if (city.current.value) {
        const res = (`${country}, ${city.current.value}`)
        return res
      } else {
        return country
      }
    } else {
      return 'anonimo'
    }
  }

  const AddPost = async () => {
    const body = new FormData()
    body.append('Post_Type', postType.current.value)
    body.append('Location', Location())
    body.append('description', description.current.value)
    body.append('image', postImg)
    return await axios.post('https://ourspace-api.up.railway.app/posts/add', body, { withCredentials: true })
      .then(() => {
        toast.success('Se ha añadido tu post!')
        window.location.href = '/'
      })
      .catch(err => toast.error(`${err}`))
  }

  return { postImg, Cities, city, setPostImg, description, inputImg, user, postType, country, setcountry, AddPost }
}