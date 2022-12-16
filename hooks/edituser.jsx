import { useCallback, useState, useRef, useEffect } from 'react'
import { toast } from 'react-hot-toast'

export default function EditUser ({ user }) {
  const [disabled, setDisabled] = useState(false)
  const [form, setForm] = useState({
    First_Name: '',
    Last_Name: '',
    Location: '',
    Date_Of_Birth: '',
    user: '',
    password: ''
  })
  const postType = useRef('')

  useEffect(() => {
    setForm(user)
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
      body.append('First_Name', form.firstName)
      body.append('Last_Name', form.lastName)
      body.append('Location', postType.current.value)
      body.append('Date_Of_Birth', form.dateOfBirth)
      body.append('user', form.user)
      body.append('password', form.password)
      body.append('image', form.img)
      setDisabled(true)
      return console.log(body)
      /* .then((response) => {
          if (response.message) {
            toast.error('Este user no esta disponible. Por favor intente con otro.')
          } else {
            toast.success('Registro exitoso, redirigiendo...')
          }
        })
        .catch((err) => {
          toast.error(`${err}`)
        }) */
    } else {
      toast.error('Rellene todos los campos')
    }
  }

  return { Edit, form, setForm, postType, disabled, setDisabled }
}
