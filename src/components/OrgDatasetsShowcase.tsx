import { useEffect, useState } from 'react'
import {useQuery, useQueryClient, useMutation} from 'react-query'
import { AtomWrapper, MolDatasetCard } from './'
import { DatasetsFound } from 'types' 
import styled from 'styled-components'

const MyWrapper = styled(AtomWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export default function OrgDatasetsShowcase () {
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
          <MolDatasetCard key={d.name} dataset={d} /> ) }

    </MyWrapper>
  )
}