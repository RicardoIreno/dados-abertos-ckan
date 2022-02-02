import Head from 'next/head'
import { useState } from 'react'
import Checkbox from '../components/atoms/Checkbox'
import {CheckSelect} from '../components/molecules'
import FilterSelector from '../components/molecules/FilterSelector'
import Default from '../components/templates/Default'

const teste = ['teste','testando','testão']

export default function Home() {
  const [tagSelectValue, setTagSelectValue] = useState('')

  return (
    <>
      <Head>
        <title>Testes CKAN</title>
        <meta name="description" content="Portfólio Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Default>

        <Checkbox name="test" />

        <CheckSelect 
          name='testeSelect' 
          options={teste}
          value={tagSelectValue}
          onChange={e => setTagSelectValue(e.target.value)}
        />
        
        <FilterSelector name='Teste filtro' options={teste} />

      </Default>

    </>
  )
}




