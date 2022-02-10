import { useEffect, useState } from 'react'
import Head from 'next/head'
import { DatasetCard, MainSearchBar } from '../components/molecules'
import Default from '../components/templates/Default'
import {Dataset, DatasetsFound } from '../types/types' 
import { Wrapper } from '../components/atoms'
import useDebounce from '../libs/useDebounce'
import styled from 'styled-components'
import ApiMy from '../ApiMy'

const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

async function callApiMy( s: string ) {
  return ApiMy.get<DatasetsFound>(`datasets/search/${s}`)
  .then( res => res.data )
}

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
    callApiMy(term).then( d => {
      setCountResults(d.count)
      setdatasets(d.results) 
    })
   
  },[term] )


  return (
    <>
      <Head>
        <title>Testes CKAN</title>
        <meta name="description" content="Portfólio Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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




