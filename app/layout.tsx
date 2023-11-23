import type { Metadata } from 'next'
import '../styles/globals.css';
import Navbar from './ui/navbar';
import Footer from './ui/footer';
import Head from 'next/head';
export const metadata: Metadata = {
  title: 'Remote jobs',
  description: 'find remote jobs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title></title>
        <meta name="description" content="Find remote jobs" />
      </Head>
      <body >
        <Navbar />
        <div>
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  )
}
