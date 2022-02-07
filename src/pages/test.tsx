import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Dataset, DatasetsFound, DatasetsFoundT} from '../types/types' 
import Default from '../components/templates/Default'
import { Wrapper } from '../components/atoms'
import { DatasetCard, MainSearchBar } from '../components/molecules'
import { searchDataset, testDatasetFind } from '../libs/datasetLib';
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
  const debouncedChange = useDebounce( (str) => setTerm(str), 1000 )

  function searchHandler( str: string) {
    console.log(`>>> seacrhHandler chamado -> ${str}`)
    setDisplayValue(str)
    debouncedChange(str)
  }

  useEffect( () => {
    console.log(`>>> useEffect chamado -> ${term}`)
    setdatasets([])

    testDatasetFind(term).then(
      (res) => {
        setdatasets(res.results)
        console.log(`---> ${res}`)

      })
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
