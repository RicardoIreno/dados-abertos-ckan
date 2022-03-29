import React from 'react'
import Link from 'next/link' 
import styled from 'styled-components'
import {Wrapper, Tag} from 'components/atoms'
import { Dataset, Group } from 'types'

const MyWrapper = styled(Wrapper)`
  max-width: 800px;
  min-height: 200px;
  margin: 1rem 1rem 0.3rem 1rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 10px -6px #000000;
`

const Title = styled.span`
  font-size: 1.5rem;
  font-family: ${props => props.theme.tipography.special};
  color: ${props => props.theme.colors.DatasetCardTitle};
  margin-bottom: 1rem
`

const Txt = styled.p`
  font-size: .9rem;
  font-family: ${props => props.theme.tipography.text};
  margin: .20rem .25rem .25rem 0 
`

const B = styled.span`
  font-size: .9rem;
  font-weight: 600;
  font-family: ${props => props.theme.tipography.text};
`

const TagWrapper = styled.footer`
  margin-top: 2rem;
`


type Props = {
  dataset: Dataset
}


function Groups(g: Group[]) {
  switch (g.length) {
    case 0: return ('')
    case 1: return ( 
      <Txt><B>Grupo: </B>{g[0].title}</Txt>
    )

    default: return (
      <Txt><B>Grupos: </B>{g.map( g => {
        <span>{g.title} </span>
      })}</Txt>
    )
  }
}

const DatasetCard = ({dataset}: Props) => {
  return(
    <MyWrapper>

      <Link href={`/datasets/${dataset.name}`}>
        <a><Title>{dataset.title}</Title></a>
      </Link>

      <Txt>{dataset.notes}</Txt>      
      
      {Groups(dataset.groups)}

      <B>{dataset.num_resources} 
          { dataset.num_resources == 1 ? ' recurso' : ' recursos' }</B>
      

      
      <TagWrapper>
      {dataset.tags.map( t => 
        <Tag key={t.id}> {t.display_name} </Tag>)}
        </TagWrapper>
        
      {dataset.groups.map( g => {
        <img src={g.image_display_url}/>
      })}
    </MyWrapper>
  )
}

export default DatasetCard


