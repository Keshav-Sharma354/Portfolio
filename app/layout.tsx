import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keshav Sharma - DevOps Engineer',
  description: 'Portfolio of Keshav Sharma, DevOps Engineer specializing in AWS, Kubernetes, CI/CD, and Infrastructure as Code',
  keywords: ['DevOps', 'AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'CI/CD'],
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
      <body className={`${inter.className} text-white min-h-screen`} style={{background: 'linear-gradient(135deg, #669bbc, #4a7c95, #669bbc)'}}>
        {children}
      </body>
    </html>
  )
}
