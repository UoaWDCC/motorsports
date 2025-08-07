import React from 'react'
import type { Metadata } from 'next'

import { Open_Sans } from 'next/font/google'

import './styles.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: {
    template: '%s · VROOM',
    default: 'VROOM',
  },
  icons: {
    icon: '/images/logo.png',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
