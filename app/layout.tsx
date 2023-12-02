import type { Metadata } from 'next'
import '../styles/globals.css';
import Navbar from './ui/navbar';
import Footer from './ui/footer';
import Head from 'next/head';
import { Inter, Lusitana } from 'next/font/google';
 
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NavyaNirmata.io - Creator of the Modern and Innovative Solutions',
  description: 'NavyaNirmata.io is your dedicated partner for comprehensive development solutions. With a focus on excellence and innovation, we bring together skilled development teams tailored to meet your unique needs. Whether you\'re embarking on a software project, building a digital presence, or enhancing your technological capabilities, NavyaNirmata.io delivers top-notch expertise. Our commitment to quality and efficiency ensures that your vision transforms into reality. Explore the limitless possibilities with NavyaNirmata.io – where development meets ingenuity for all your requirements.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
    <Head>
        <title></title>
        <meta name="description" content="Development Teams for all your need." />
      </Head>
      <body className={`${inter.className} antialiased `}>
        <Navbar />
        <div>
          {children}
        </div>
        
        <Footer />
      </body>
  </html>
  )
}
