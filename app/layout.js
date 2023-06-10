import '@style/globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Noble Spiritz',
  description: 'A non profit organization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
