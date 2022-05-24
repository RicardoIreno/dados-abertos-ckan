import { QueryClientProvider } from 'react-query'
import { queryClient } from 'utils/queryClient';

export function QueryProvider( { children }: React.PropsWithChildren<{}> ) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}