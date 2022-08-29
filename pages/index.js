import Head from 'next/Head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function index() {
  return (
    <>
      <Head>
        <title>makan</title>
      </Head>
      <Hero />
    </>
  )
}
