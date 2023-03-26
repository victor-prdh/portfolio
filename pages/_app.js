import Linkedin from '../components/linkedin'
import '../styles/globals.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
  <Linkedin />
  <Component {...pageProps} />
  </>
}
