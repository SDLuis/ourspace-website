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
    img: ''
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

  const Register = useCallback(() => {
    if (checkFilledFields()) {
      setDisabled(true)
      return register(form)
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
  }, [checkFilledFields, form])

  return { Register, isRegister: Boolean(registed), form, setForm, disabled, setDisabled }
}
