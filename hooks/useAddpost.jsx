/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useRef, useEffect } from 'react'
import { getCountries } from '../services/country'
import { toast } from 'react-hot-toast'
import UseUser from './useLogin'
import { addPost } from '../services/posts'

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
  const [disabled, setDisabled] = useState(false)
  useEffect(() => {
    userLogged().then(data => setUser(data))
    country && country.trim() !== 'anonimo'
      ? getCountries(country.trim()).then(({ data }) => { setCities(data) })
      : null
  }, [country, disabled])

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
    setDisabled(true)
    if (description.current?.value !== '') {
      const body = new FormData()
      body.append('Post_Type', postType.current.value)
      body.append('Location', Location())
      body.append('description', description.current.value)
      body.append('image', postImg)
      return addPost(body)
        .then(() => {
          toast.success('Se ha añadido tu post!')
          window.location.href = '/'
        })
        .catch(err => toast.error(`${err}`))
        .finally(setTimeout(() => { setDisabled(false) }, 10000))
    } else {
      toast.error('Agregue una descripción')
      setTimeout(() => { setDisabled(false) }, 3000)
    }
  }

  return { postImg, Cities, city, setPostImg, description, inputImg, user, postType, country, setcountry, AddPost, disabled }
}
