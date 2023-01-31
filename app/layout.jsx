import './globals.css'
import Navbar from '../components/navbar'
import { AuthProvider } from '../context/auth'
export default function MainLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-white dark:bg-black'>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
