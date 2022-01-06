import React, { ReactNode } from 'react'
import styled from 'styled-components'
import {theme} from '../../configs'
import Wrapper from '../atoms/Wrapper'
import {DatasetPrevInfo} from '../../types/Types'

const MyWrapper = styled(Wrapper)`
  width: 240px;
  height: 150px;
  margin: 1rem;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 10px -6px #000000;
`

const Title = styled.span`
  font-size: ${theme.sizes.DatasetCardTitle};
  font-family: ${theme.tipography.special};
  color: ${theme.colors.DatasetCardTitle};
`

type Props = {
  children?: ReactNode
  // p: DatasetPrevInfo
  name: string

}

const DatasetCard = ({children, name}: Props) => {
  return(
    <MyWrapper>
      <Title>{name}</Title>

      {/* <span>Dados: {p.metadata_created}</span>
      <span>Dados criados em: {p.metadata_created}</span>
      <span>Dados modificados em: {p.metadata_created}</span>

      <span>Organização: {p.oganizationTitle}</span>

      <span>Tags: {p.tags.map( t => <span key={t}>{t}</span>)}</span>
 */}

        {/* {children} */}

    </MyWrapper>
  )
}


export default DatasetCard


