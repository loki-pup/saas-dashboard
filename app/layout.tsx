import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import PageHeader from '@/components/page-header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bozyu Saas Dashboard',
  description: 'Bozyu doggie feedback wudget',
  authors: [{ name: 'Bozyu' }, { name: 'Lulu'},{name:'Loki'},{name:'Luna'}],
    creator: 'Bozyu',
    publisher: 'Bozyu',
    icons: {
      icon: "/7.jpg?v=3", // Use absolute path from /public folder
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>     
            <PageHeader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}