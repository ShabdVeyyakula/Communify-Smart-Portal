// pages/_app.js
import '../styles/globals.css'
import initFirebase from '../firebase/initFirebase'

initFirebase()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp