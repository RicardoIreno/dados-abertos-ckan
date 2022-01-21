import { ThemeProvider } from 'styled-components'
import {theme} from '../theme'
import GlobalStyle from '../theme/global'
import '../theme/fonts.css'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
  
}

export default MyApp
