import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
