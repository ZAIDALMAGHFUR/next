import Head from 'next/head';
import 'daisyui';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const pp = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}

export default pp;
