import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Outfit } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { ThemeProvider } from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider>
        <div className='container'>
          <div className='wrapper'>      
          <Navbar/>
        {children}
        <Footer/>
        </div>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
        </body>
    </html>
  )
}
