import { useCallback, useState, useContext } from 'react'
import Cookies from 'js-cookie'
import { Login } from '../services/auth'
import { toast } from 'react-hot-toast'
import { authContext } from '../context/auth'
import { jwtVerify } from 'jose'
import { confirmAlert } from 'react-confirm-alert'
import '../styles/reactConfirmAlert.css'

export default function UseUser () {
  const { jwt, setJWT } = useContext(authContext)
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

  const login = (event) => {
    event.preventDefault()
    setDisabled(true)
    setTimeout(() => { setDisabled(false) }, 2000)
    if (checkFilledFields()) {
      return Login(user, password)
        .then((res) => {
          if (res.message) {
            toast.error(`${res.message}.`)
          } else if (res.data) {
            setJWT(res.data)
            Cookies.set('ourspace', `${res.data}`, { expires: 6 / 24 })
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
    const options = {
      title: 'Cerrar sesión',
      message: '¿Quiere cerrar sesión?',
      buttons: [
        {
          label: 'Salir',
          onClick: () => {
            Cookies.remove('ourspace')
            setJWT(null)
            toast('Nos vemos pronto', {
              icon: '👋',
              duration: 1000
            })
            window.location.href = '/'
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypress: () => {},
      onKeypressEscape: () => {},
      overlayClassName: 'overlay-custom-class-name'
    }
    confirmAlert(options)
  }, [setJWT])

  const userLogged = async () => {
    if (jwt) {
      const secret = new TextEncoder().encode('ourspace')
      const { payload } = await jwtVerify(jwt, secret)
      return payload
    }
  }

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
    setDisabled,
    userLogged
  }
}
