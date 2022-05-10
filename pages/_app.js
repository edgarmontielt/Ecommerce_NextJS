import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { Head } from 'next/document'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
