import Head from 'next/head'
import Checkbox from '../components/atoms/Checkbox'
import Default from '../components/templates/Default'

export default function Home() {

  return (
    <>
      <Head>
        <title>Testes CKAN</title>
        <meta name="description" content="Portfólio Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Default>

        <Checkbox name="test" />
        
      </Default>

    </>
  )
}




