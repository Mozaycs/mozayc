import '@/styles/globals.css'
import { lightTheme } from '@/theme'
import { ThemeProvider } from '@emotion/react'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
