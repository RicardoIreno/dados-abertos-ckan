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

  useEffect( () => {
    if (queryTerm.data || queryTags.data  )
      searchDatasets(queryTerm.data, queryTags.data)
        .then( d => queryClient.setQueryData('datasets', d.result )
      )
  },[queryTerm.data, queryTags.data ] )

  return (
    <>
     {p.children}
    </>
  )
}
