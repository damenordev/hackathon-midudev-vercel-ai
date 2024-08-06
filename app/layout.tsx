import { Metadata } from 'next'

import { APP_METADATA } from '@/constants'
import { ILayout } from '@/types'
import { fontPrimary } from '@/styles'

import '@/styles/globals.css'

export const metadata: Metadata = APP_METADATA

export default async function RootLayout({ children }: ILayout) {
  return (
    <html>
      <body className={`min-h-screen bg-background text-foreground overflow-x-hidden ${fontPrimary.className}`}>
        {children}
      </body>
    </html>
  )
}
