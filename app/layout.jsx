'use client'

import './globals.css'
import Navbar from '../components/navbar'
import { Toaster } from 'react-hot-toast'
export default function MainLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  )
}
