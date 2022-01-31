import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Dataset} from '../types/types' 
import Default from '../components/templates/Default'
import { Wrapper } from '../components/atoms'
import { DatasetCard, MainSearchBarV2 } from '../components/molecules'
import { searchDataset } from '../libs/datasetLib';

const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Tests2() {
  const [datasets, setdatasets] = useState<Dataset[]>([]);
  const [countResults, setCountResults] = useState(0)
  const [term, setTerm] = useState('');

  useEffect(  () => {
    if (term)
      searchDataset(term).then( 
        d => {
          setdatasets( d.results )
          setCountResults( d.count )
        }
    )
  },[term] )

  return (
    <>
      <Default>

      {/* <MainSearchBarV2 
					value={term}
					onChange={ }
				>
			</MainSearchBarV2> */}

      <MyWrapper>

        <h3>{countResults} datasets encontrados</h3>

        {datasets.map( d => 
            <DatasetCard key={d.name} dataset={d} /> )}

      </MyWrapper>
        
      </Default>
    </>
  )
}
