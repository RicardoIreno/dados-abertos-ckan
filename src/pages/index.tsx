import { useEffect, useState } from 'react'
import useDebounce from 'utils/useDebounce'
import { Wrapper } from 'components/atoms'
import { DatasetCard, MainSearchBar, HeadApp } from 'components/molecules'
import Default from 'components/templates/Default'
import { searchDataset } from 'services/adaptersMyApi'
import styled from 'styled-components'
import {Dataset } from 'types' 


const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export default function Home() {
  const debouncedChange = useDebounce( (str) => setTerm(str), 1000 )
  const [datasets, setdatasets] = useState<Dataset[]>([])
  const [displayValue, setDisplayValue ] = useState('')
  const [countResults, setCountResults] = useState(0)
  const [term, setTerm] = useState('')


  function searchHandler( str: string) {
    setDisplayValue(str)
    debouncedChange(str)
  }

  useEffect( () => {
    setdatasets([])
    searchDataset(term).then( d => {
      setCountResults(d.count)
      setdatasets(d.results) 
    })
   
  },[term] )


  return (
    <>
      <HeadApp />

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




