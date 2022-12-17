import GlobalStyle from '../../styles/globals'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '../contexts/AuthContext'

import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ToastContainer
      autoClose={3000}
      position="bottom-right"
      pauseOnHover={false}
      />
      <Component {...pageProps} />  
    </AuthProvider>
  )
}
