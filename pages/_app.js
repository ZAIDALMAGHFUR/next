import '../styles/globals.css'
import Navigation from "../components/Navbar";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
<>
  <Navbar />
  <Hero />
</>
export default MyApp
