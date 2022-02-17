import { useEffect, useState } from 'react'
import {useQuery, useQueryClient, useMutation} from 'react-query'
import { Wrapper } from 'components/atoms'
import { DatasetCard } from 'components/molecules'
import { Dataset, DatasetsFound } from 'types' 
import styled from 'styled-components'

const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export default function DatasetsShowcase () {
  const queryClient = useQueryClient()
  const [datasetsFound, setDatasetsFound] = useState<DatasetsFound>( null )
  const {data} = useQuery('datasets')
  const isData = !!data

  useEffect( () => {
    mutationDatasets.mutate()
  },[isData] )

  const mutationDatasets = useMutation( 'datasets', async () => 
    setDatasetsFound( queryClient.getQueryData('datasets') ) 
  )


  return (
    <MyWrapper>

    { datasetsFound == null ? <span></span> : 
      <h3>{datasetsFound.count} datasets encontrados</h3> }

    { datasetsFound == null ? <p>Pesquise por datasets</p> :
        datasetsFound.results.map( d => 
          <DatasetCard key={d.name} dataset={d} /> ) }

    </MyWrapper>
  )
}