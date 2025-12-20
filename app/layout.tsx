import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keshav Sharma - DevOps Engineer',
  description: 'DevOps Engineer with 7+ years of experience designing, automating, and operating scalable cloud infrastructure and CI/CD platforms.',
  keywords: ['DevOps', 'AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'CI/CD', 'DevSecOps'],
  authors: [{ name: 'Keshav Sharma' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-white min-h-screen`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

