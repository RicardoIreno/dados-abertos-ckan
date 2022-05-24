import React from 'react'
import Link from 'next/link' 
import {Tag} from '.'
import { Dataset, Group } from 'types'
import{ DatasetCardCSS } from 'styles'
type Props = {
  dataset: Dataset
}

function Groups(g: Group[]) {
  switch (g.length) {
    case 0: return ('')
    case 1: return ( 
      <p><b>Grupo: </b>{g[0].title}</p>
    )

    default: return (
      <p><b>Grupos: </b>{g.map( g => {
        <span>{g.title} </span>
      })}</p>
    )
  }
}

export default function DatasetCard({dataset}: Props) {
  return(
    <div className={DatasetCardCSS()}>

      <Link href={`/datasets/${dataset.name}`}>
        <a><h4>{dataset.title}</h4></a>
      </Link>

      <p>{dataset.notes}</p>      
      
      {Groups(dataset.groups)}

      <p className="recurso">{dataset.num_resources} 
          { dataset.num_resources == 1 ? ' recurso' : ' recursos' }</p>
      <div>

      {dataset.tags.map( t => 
        <Tag key={t.id}> {t.display_name} </Tag>)}
        </div>
        
      {dataset.groups.map( g => {
        <img src={g.image_display_url}/>
      })}

      <a href={`http://dadosabertos.unifesp.br/dataset/${dataset.name}`} target='blank'>Acessar</a>
    </div>
  )
}


// const div = styled(AtomWrapper)`
//   max-width: 800px;
//   min-height: 200px;
//   margin: 1rem 1rem 0.3rem 1rem;
//   padding: 2rem;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0px 1px 10px -6px #000000;
// `

// const Title = styled.span`
//   font-size: 1.5rem;
//   font-family: ${props => props.theme.tipography.special};
//   color: ${props => props.theme.colors.DatasetCardTitle};
//   margin-bottom: 1rem
// `

// const Txt = styled.p`
//   font-size: .9rem;
//   font-family: ${props => props.theme.tipography.text};
//   margin: .20rem .25rem .25rem 0 
// `

// const B = styled.span`
//   font-size: .9rem;
//   font-weight: 600;
//   font-family: ${props => props.theme.tipography.text};
// `

// const TagWrapper = styled.footer`
//   margin-top: 2rem;
// `
