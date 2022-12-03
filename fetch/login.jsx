import { useCallback, useState } from 'react'
import Cookies from 'js-cookie'
import { Login } from '../services/auth'
import { toast } from 'react-hot-toast'

export default function UseUser () {
  const [jwt, setJWT] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [disabled, setDisabled] = useState(false)
  const checkFilledFields = useCallback(() => {
    if (user === '' || password === '') {
      return false
    } else {
      return true
    }
  }, [password, user])

  const login = () => {
    if (checkFilledFields()) {
      return Login(user, password)
        .then((res) => {
          if (res.message) {
            toast.error(`${res.message}.`)
          } else if (res.data) {
            setJWT(res.data)
            Cookies.set('ourspace', `${res.data}`, { expires: 1 / 24 })
            toast.success('Se ha logeado exitosamente.')
          }
        })
        .catch(() => {
          toast.error('No se pudo Logear, intente mas tarde.')
        })
    } else {
      toast.error('Rellene todos los campos')
    }
  }

  const logout = useCallback(() => {
    Cookies.remove('ourspace')
    setJWT(null)
    toast('Good bye', {
      icon: '👋',
      duration: 1000
    })
    window.location.href = '/'
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    user,
    setUser,
    password,
    setPassword,
    checkFilledFields,
    disabled,
    setDisabled
  }
}
