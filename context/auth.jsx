'use client'
import React, { useState, useContext } from 'react'
import Cookies from 'js-cookie'

const authContext = React.createContext({ jwt: 'hola' })

export const AuthProvider = ({ children }) => {
  const [jwt, setJWT] = useState(
    () => Cookies.get('ourspace')
  )
  return (
    <authContext.Provider value={{ jwt, setJWT }}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

export { authContext }
