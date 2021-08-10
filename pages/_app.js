import '../styles/globals.css'
import initFirebase from "../firebase/firebaseInit"; // initialize firebase
import { AuthContextProvider } from '../context/authContext'
import ProtectRoute from '../components/protectedRoute'

initFirebase()

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthContextProvider>
  )
}

export default MyApp