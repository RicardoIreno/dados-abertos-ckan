import React from 'react'
import Link from 'next/link' 
import styled from 'styled-components'
import {Wrapper, TagComponent} from '../atoms'
import { Dataset } from '../../types/types'

const MyWrapper = styled(Wrapper)`
  max-width: 800px;
  height: 250px;
  margin: 1rem;
  align-items: center;
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

const DatasetCard = (p: Props) => {
  return(
    <MyWrapper>
      <Title>{p.dataset.title}</Title>

      <Link href={`/datasets/${p.dataset.name}`}>
          <a>{p.dataset.name}</a>
      </Link>

      <p>{p.dataset.resources.map( r => r.description)}</p>

      <span>
        {p.dataset.tags.map( t => 
          <TagComponent 
            key={t.id}> {t.display_name} 
          </TagComponent>)
        }
      </span>
    </MyWrapper>
  )
}

export default DatasetCard


