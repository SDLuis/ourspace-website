import { useState } from 'react'

export default function UseMenuOption () {
  const [show, setShow] = useState()
  return { show, setShow }
}
