import { useEffect, useState } from 'react'
import {Dataset, DatasetsFound } from 'types' 
import { Wrapper } from 'components/atoms'
import { DatasetCard, MainSearchBar } from 'components/molecules'
import Default from 'components/templates/Default'
import useDebounce from 'utils/useDebounce'
import styled from 'styled-components'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { searchDataset } from 'services/adaptersMyApi'
import DatasetsShowcase from 'components/organisms/DatasetsShowcase'

const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export default function Tests() {
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
      <Default>

      <MainSearchBar 
				value={displayValue}
				onChange={ e => searchHandler(e.target.value) }
			>
  		</MainSearchBar>

      <DatasetsShowcase />

        
      </Default>
    </>
  )
}
