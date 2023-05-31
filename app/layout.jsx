import './globals.css'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin']})

export const metadata = {
  title: 'sell.io',
  description: 'Buy products from small to large scale industries.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
        <div className='bg-gray-800 h-screen'>
        <Nav />
        {children}
        </div>
        </Provider>
        </body>
    </html>
  )
}
