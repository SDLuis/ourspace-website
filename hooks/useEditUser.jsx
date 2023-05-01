/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
'use client'
import { useCallback, useState, useEffect } from 'react'
import { editUser } from '../services/user'
import UserLogged from './userLogged'
import { toast } from 'react-hot-toast'

export default function EditUser ({ user, city, setcountry, country } = {}) {
  const { userFound } = UserLogged()
  const [disabled, setDisabled] = useState(false)
  const [form, setForm] = useState({
    First_Name: '',
    Last_Name: '',
    Location: '',
    Date_Of_Birth: '',
    user: '',
    password: '',
    img: null
  })

  const locationFromUser = form.Location?.split(',')
  const countryFromUser = locationFromUser ? locationFromUser[1] : 'anonimo'
  const cityFromUser = locationFromUser ? locationFromUser[0] : 'anonimo'

  useEffect(() => {
    user ? setForm(user) : null
    setcountry(countryFromUser)
  }, [user])

  const checkFilledFields = useCallback(() => {
    if (
      form.First_Name === '' ||
      form.Last_Name === '' ||
      form.Location === '' ||
      form.Date_Of_Birth === '' ||
      form.user === '' ||
      form.password === ''
    ) {
      return false
    } else {
      return true
    }
  }, [form.First_Name, form.Last_Name, form.Location, form.Date_Of_Birth, form.password, form.user])

  const Edit = async (event) => {
    event.preventDefault()
    setTimeout(() => { setDisabled(false) }, 2000)
    if (checkFilledFields()) {
      const body = new FormData()
      body.append('First_Name', form.First_Name)
      body.append('Last_Name', form.Last_Name)
      body.append('Location', `${city.current?.value}, ${country.trim()}`)
      body.append('Date_Of_Birth', form.Date_Of_Birth)
      body.append('user', form.user)
      body.append('password', form.password)
      body.append('image', form.img)
      setDisabled(true)
      return editUser(body, userFound.User_ID)
        .then((response) => {
          if (response.message) {
            toast.error('No se puedo guardar tu información, intente más tarde.')
          } else {
            toast.success('Tu configuración se ha guardado con éxito')
          }
        })
        .catch((err) => {
          toast.error(`${err}`)
        })
    } else {
      toast.error('Rellene todos los campos')
    }
  }

  return { Edit, form, setForm, disabled, setDisabled, city, country, cityFromUser, countryFromUser }
}
