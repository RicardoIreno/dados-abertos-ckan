import Head from 'next/head'
import GridWrapper from '../components/atoms/GridWrapper'
import Default from '../components/templates/Default'

// 'http://200.144.93.54/api/3/action/package_list'
// const url = 'http://localhost:5000/api/3/action/package_list'



const Home = () => {
  return (
    <>
      <Head>
        <title>Construindo meu site</title>
        <meta name="description" content="Portfólio Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Default>

      <GridWrapper>

      </GridWrapper>
        
      </Default>

    </>
  )
}

// Home.getInitialProps = async () => {
  
//   const datta = listDatasets()
  
//   return datta
// }

export default Home


