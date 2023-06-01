import Navbar from './components/Navbar/Navbar'
import '@style/globals.css'
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

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
      </body>
    </html>
  )
}
