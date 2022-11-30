import './globals.css'
import Navbar from '../components/navbar'
export default function MainLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
