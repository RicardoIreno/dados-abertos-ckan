import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import GlobalStyle from '../theme/global'
import {theme} from '../theme'
import {Hydrate, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient } from 'react-query'
// import queryClient from '../query'

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
