import { ThemeProvider } from 'styled-components'
import {theme} from '../configs'
import GlobalStyle from '../components/atoms/global'
import '../configs/fonts.css'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
  
}

export default MyApp
