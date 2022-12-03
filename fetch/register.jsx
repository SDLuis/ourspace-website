import { useCallback, useState } from 'react'
import { register } from '../services/auth'
import { toast } from 'react-hot-toast'

export default function UseRegister () {
  const [registed, setRegisted] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [form, setForm] = useState({
    firstNameReg: '',
    lastNameReg: '',
    userReg: '',
    passwordReg: '',
    img: []
  })

  const checkFilledFields = useCallback(() => {
    if (
      form.firstNameReg === '' ||
      form.lastNameReg === '' ||
      form.userReg === '' ||
      form.passwordReg === ''
    ) {
      return false
    } else {
      return true
    }
  }, [form.firstNameReg, form.lastNameReg, form.passwordReg, form.userReg])

  const Register = async () => {
    if (checkFilledFields()) {
      const body = new FormData()
      body.append('First_Name', form.firstNameReg)
      body.append('Last_Name', form.lastNameReg)
      body.append('user', form.userReg)
      body.append('password', form.passwordReg)
      body.append('image', form.img)
      setDisabled(true)
      return await register(body)
        .then((response) => {
          if (response.message) {
            toast.error('Este user no esta disponible. Por favor intente con otro.')
          } else {
            toast.success('Registro exitoso, redirigiendo...')
            setRegisted(true)
          }
        })
        .catch((err) => {
          toast.error(`${err}`)
        })
    } else {
      toast.error('Rellene todos los campos')
    }
  }

  return { Register, isRegister: Boolean(registed), form, setForm, disabled, setDisabled }
}
