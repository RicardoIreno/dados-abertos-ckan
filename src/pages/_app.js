import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/global'
import {theme} from '../theme'
import '../theme/fonts.css'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import {useState} from 'react'
// import queryClient from '../services/query'


function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () => 
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      })
  )

  return(
    <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Hydrate>
    <ReactQueryDevtools />
  </QueryClientProvider>
  )
  
}

export default MyApp
