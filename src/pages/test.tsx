import { useEffect, useState } from 'react'
import {Dataset, DatasetsFound } from 'types' 
import { Wrapper } from 'components/atoms'
import { DatasetCard, MainSearchBar } from 'components/molecules'
import Default from 'components/templates/Default'
import useDebounce from 'utils/useDebounce'
import styled from 'styled-components'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { searchDataset } from 'services/adaptersMyApi'

const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export default function Tests() {
  const debouncedChange = useDebounce( (str) => setTerm(str), 1000 )
  const [datasets, setDatasets] = useState<Dataset[]>([])
  const [displayValue, setDisplayValue ] = useState('')
  const [countResults, setCountResults] = useState(0)
  const [term, setTerm] = useState('')

  const queryClient = useQueryClient()
  
  const queryDatasets = useQuery('datasets', () => {} )
  // : UseQueryResult<TData, TError>
 
  // TQueryFnData = unknown,
  // TError = unknown,
  // TData = TQueryFnData,
  // TQueryKey extends QueryKey = QueryKey



  const mutationDatasets = useMutation( 
    'datasets', 
    () => searchDataset(term).then( d => d ),
    {
    onSuccess: ( data ) => {
      queryClient.invalidateQueries('datasets')
      setDatasets( data.results )
      setCountResults( data.count )
    },
  })



  function searchHandler( str: string) {
    setDisplayValue(str)
    debouncedChange(str)
    // mutationSearchTerm.mutate(str)
  }

  useEffect( () => {
    mutationDatasets.mutate()

    // setCountResults(d.count)
    // setdatasets(d.results) 
  },[term] )

  return (
    <>
      <Default>

      <MainSearchBar 
				value={displayValue}
				onChange={ e => searchHandler(e.target.value) }
			>
  		</MainSearchBar>

      <MyWrapper>

        { !countResults ? <span></span> : 
          <h3>{countResults} datasets encontrados</h3> }

        { !datasets ? <p>Pesquise por datasets</p> :
            datasets.map( d => 
              <DatasetCard key={d.name} dataset={d} /> ) }

      </MyWrapper>
        
      </Default>
    </>
  )
}
