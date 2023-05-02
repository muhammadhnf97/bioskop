import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '@/pages/components/layout'
import Head from 'next/head'
import { LoginProvider } from './context/login'

export default function App({ Component, pageProps }) {
   return (
    <>
    <Head>
      <title>Watch With Me</title>
      <meta name='Bioskop' content='Pemesanan di Bioskop' />
      <link rel='' href='' />
    </Head>
    <ThemeProvider enableSystem={false} attribute='class'>
      <LoginProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoginProvider>
    </ThemeProvider>
    </>
  )
}
