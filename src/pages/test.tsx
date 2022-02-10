import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Dataset, DatasetsFound } from '../types/types' 
import Default from '../components/templates/Default'
import { Wrapper } from '../components/atoms'
import { DatasetCard, MainSearchBar } from '../components/molecules'
import useDebounce from '../libs/useDebounce'
import ApiMy from '../ApiMy'

const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


async function callApiMy( s: string ) {
  return ApiMy.get<DatasetsFound>(`datasets/search/${s}`)
  .then( res => res.data )
  // return axios.get<DatasetsFound>(`http://localhost:3000/api/datasets/search/${s}`)
  // .then( res => res.data )

}


export default function Tests() {
  const [datasets, setdatasets] = useState<Dataset[]>([])
  const [countResults, setCountResults] = useState(0)
  const [term, setTerm] = useState('')
  const [displayValue, setDisplayValue ] = useState('')
  const debouncedChange = useDebounce( (str) => setTerm(str), 1000 )


  function searchHandler( str: string) {
    setDisplayValue(str)
    debouncedChange(str)
  }

  useEffect( () => {
    setdatasets([])
    callApiMy(term).then( d => {
      setCountResults(d.count)
      setdatasets(d.results) 
    })
   
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
