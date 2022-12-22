/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
'use client'
import { useCallback, useState, useEffect } from 'react'
import { editCoverUser } from '../services/user'
import { toast } from 'react-hot-toast'

export default function EditCoverUser ({ user } = {}) {
  const [disabled, setDisabled] = useState(false)
  const [cover, setCover] = useState()

  useEffect(() => {
    user ? setCover(user.cover) : null
  }, [user])

  const checkFilledFields = useCallback(() => {
    if (
      cover === ''
    ) {
      return false
    } else {
      return true
    }
  }, [cover])

  const EditCover = async (event) => {
    event.preventDefault()
    setTimeout(() => { setDisabled(false) }, 10000)
    if (checkFilledFields()) {
      const body = new FormData()
      body.append('image', cover)
      setDisabled(true)
      return editCoverUser(body, user.User_ID)
        .then((response) => {
          if (response.message) {
            toast.error('No se puedo guardar tu información, intente más tarde.')
          } else {
            toast.success('Tu configuración se ha guardado con éxito', { duration: 2000 })
            window.location.href = `/user/${user.user}`
          }
        })
        .catch((err) => {
          toast.error(`${err}`)
        })
    } else {
      toast.error('Rellene todos los campos')
    }
  }

  return { EditCover, disabled, setDisabled, setCover, cover }
}
