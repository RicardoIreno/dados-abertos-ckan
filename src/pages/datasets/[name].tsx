import { GetStaticProps } from 'next'
import { Tag, DateFormated, TemplateDefault } from 'components'
import {getDataset, listDatasets} from 'services/ApiCkan'
import { Dataset, Group } from 'types'

import Link from 'next/link'

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
      },
      revalidate: 10 // 60 * 60 * 24 // 24 hrs
    }

  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}


export default function Show(props: Props) {

  return (
    <TemplateDefault>
      <h1>{props.d.name}</h1>
      <p>{props.d.notes}</p>
      
      <p>{props.d.organization.title}</p>
      <p>{props.d.groups.map( g => {
        <p>{g.title}</p>
      })}</p>

      <span>
        {props.d.tags.map( t => 
          <Tag 
            key={t.id}> {t.display_name} 
          </Tag>
        )}
      </span>


      <div>
        <p>Resources: {props.d.num_resources}</p>
        {props.d.resources.map(
          r => 
            <div key={r.id}>
              <h3>{r.name}</h3>
              <p>{r.description}</p>
              <p>{r.format}</p>

              <span>Criado em:</span>
              <DateFormated input={r.created}/>

              <span>Modificado em:</span>
              <DateFormated input={r.last_modified}/>

              <Link href={r.url}>
                <a>{r.url}</a>
              </Link>
            </div>
        )}
      </div>
    
    </TemplateDefault>
  )
}