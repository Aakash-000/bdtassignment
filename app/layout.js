"use client"
import { AuthProvider } from './components/context/SearchContext'
import './globals.css'
import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={nunito.className}>
      <AuthProvider>{children}</AuthProvider></body>
    </html>
  )
}















