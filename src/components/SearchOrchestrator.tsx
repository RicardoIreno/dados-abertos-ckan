import { useQuery, useQueryClient, useMutation } from 'react-query'
import { ReactNode, useEffect, useState } from 'react'
import { searchDataset, searchDatasets } from 'services/ApiMy'

type Props = {
  children: ReactNode
}

export default function SearchOrchestrator(p: Props) {
  const queryClient = useQueryClient()
  const queryTerm = useQuery<string>('term', {retry: false})
  const queryTags = useQuery<string[]>('tags', {retry: false})

  // const mutationDatasets = useMutation( (term: string) => 
  //   searchDatasets(term, queryTags.data).then( d => d ), {

  //     onSuccess: ( data ) => {
  //       if (data)
  //         queryClient.setQueryData('datasets', data.result )
  //     },

  //     onError: (error) => {
  //       console.log('deu erro', error)  
  //     }
  //   }
  // )

  useEffect( () => {
    console.log("useEffect do Orquestrador disparado")
    if (queryTerm.data !== '' && queryTags.data !== [] )
      searchDatasets(queryTerm.data, queryTags.data)
        .then( d => queryClient.setQueryData('datasets', d.result )
        )

    // if (queryTerm.data === '') queryClient.resetQueries('datasets')

  },[queryTerm.data, queryTags.data ] )


  return (
    <>
     {p.children}
    </>
  )
}
