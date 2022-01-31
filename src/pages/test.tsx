import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Dataset} from '../types/types' 
import Default from '../components/templates/Default'
import { Wrapper } from '../components/atoms'
import { DatasetCard, MainSearchBar } from '../components/molecules'
import { searchDataset } from '../libs/datasetLib';
import useDebounce from '../libs/useDebounce'

const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



export default function Tests() {
  const [datasets, setdatasets] = useState<Dataset[]>([])
  const [countResults, setCountResults] = useState(0)
  const [term, setTerm] = useState('')
  const [displayValue, setDisplayValue ] = useState(term)
  const debouncedChange = useDebounce( (term) => setTerm(term), 600 )

  function searchHandler( str: string) {
    setDisplayValue(str)
    debouncedChange(str)
  }

  useEffect( () => {
    if (term)
      setdatasets([])
      console.log(`useEffect ${term}`)
      searchDataset(term).then( 
        d => {
          setdatasets( d.results )
          setCountResults( d.count )
        }
      )
    },[term] 
  )

  return (
    <>
      <Default>

      <MainSearchBar 
				value={displayValue}
				onChange={ e => searchHandler(e.target.value) }
			>
  		</MainSearchBar>

      <MyWrapper>

        <h3>{countResults} datasets encontrados</h3>

        {datasets.map( d => 
          <DatasetCard key={d.name} dataset={d} /> )}

      </MyWrapper>
        
      </Default>
    </>
  )
}
