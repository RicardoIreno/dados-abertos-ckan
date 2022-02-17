import { useQuery, useQueryClient, useMutation } from 'react-query'
import { useEffect, useState } from 'react'
import { MainSearchBar } from 'components/molecules'
import { searchDataset } from 'services/adaptersMyApi'
import useDebounce from 'utils/useDebounce'



export default function Search() {
  const [displayValue, setDisplayValue ] = useState('')
  const [term, setTerm] = useState('')
  const queryClient = useQueryClient()
  const debouncedChange = useDebounce( (str) => setTerm(str), 1000 )
  const queryDatasets = useQuery('datasets', () => {} )

  const mutationDatasets = useMutation( 'datasets', (term: string ) => 
    searchDataset(term).then( d => d ), {

    onSuccess: ( data ) => {
      queryClient.setQueryData('datasets', data )
    },
  })


  function searchHandler( str: string) {
    setDisplayValue(str)
    debouncedChange(str)
  }

  useEffect( () => {
    if (term == '') queryClient.invalidateQueries('datasets')
    mutationDatasets.mutate(term)
  },[term] )

  return (
    <>
      <MainSearchBar 
				value={displayValue}
				onChange={ e => searchHandler(e.target.value) }
			>
  		</MainSearchBar>
    </>
  )
}
