import React from 'react'
import Link from 'next/link' 
import styled from 'styled-components'
import {Wrapper, TagComponent, DateFormated} from '../atoms'
import { Dataset } from '../../types/types'

const MyWrapper = styled(Wrapper)`
  max-width: 800px;
  height: 250px;
  margin: 1rem;
  padding: 2rem;
  /* align-items: center; */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 10px -6px #000000;
`

const Title = styled.span`
  font-size: ${props => props.theme.sizes.DatasetCardTitle};
  font-family: ${props => props.theme.tipography.special};
  color: ${props => props.theme.colors.DatasetCardTitle};
`

type Props = {
  dataset: Dataset
}

const DatasetCard = ({dataset}: Props) => {
  return(
    <MyWrapper>

      <Link href={`/datasets/${dataset.name}`}>
        <a><Title>{dataset.title}</Title></a>
      </Link>

      <p>{dataset.notes}</p>

      <span>Grupo: {dataset.groups[0].display_name}</span>

      <span>{dataset.num_resources} 
        { dataset.num_resources == 1 ? ' recurso' : ' recursos' }
      </span>


      <span>
        {dataset.tags.map( t => 
          <TagComponent 
            key={t.id}> {t.display_name} 
          </TagComponent>)
        }
      </span>
    </MyWrapper>
  )
}

export default DatasetCard


