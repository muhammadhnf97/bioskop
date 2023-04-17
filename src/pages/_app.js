import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '@/pages/components/layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
   return (
    <>
    <Head>
      <title>Halo</title>
      <meta name='Bioskop' content='Pemesanan di Bioskop' />
      <link rel='' href='' />
    </Head>
    <ThemeProvider enableSystem={false} attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </>
  )
}
