import '@style/globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Toastcontainer from './components/ToastContainer/Toastcontainer'



const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Noble Spiritz',
  description: 'A non profit organization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toastcontainer/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
