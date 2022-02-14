import { GetStaticProps, GetStaticPaths } from 'next'
import Default from '../../components/templates/Default'
import { Wrapper } from '../../components/atoms'
import styled from 'styled-components'
import {getDataset, listDatasets} from '../api/datasets/datasetLib'
import { Dataset } from '../../types/types'

const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

type Props = {
  d: Dataset
}


export async function getStaticPaths() {
  const names = await listDatasets()

  const paths = names.map( d => ({
    params: { name: d },
  }))

  return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    return {
      props: {
        d: await getDataset(params.name)
      }
    }

  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}


export default function Show(props: Props) {

  return (
    <Default>
      <h1>{props.d.name}</h1>
      
      <h2>{props.d.name}</h2>
    </Default>
  )
}