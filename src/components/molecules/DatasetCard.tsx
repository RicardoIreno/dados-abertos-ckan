import React, { ReactNode } from 'react'
import styled from 'styled-components'
import {theme} from '../../configs'
import {Wrapper, TagComponent} from '../atoms'
import { Tag, Resource } from '../../types/types'

const MyWrapper = styled(Wrapper)`
  max-width: 800px;
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
  name: string
  title: string
  tags?: Tag[]
  resources?: Resource[]

}


//  export const getServerSideProps = async () => {

//   return {
//     props: {
//       allDatasets: (await getAllDatasets())
//     }
//   }

// }


const DatasetCard = (p: Props) => {
  return(
    <MyWrapper>
      <Title>{p.title}</Title>

      <p>{p.resources.map( r => r.description)}</p>

      {/* <span>Dados: {p.metadata_created}</span>
      <span>Dados criados em: {p.metadata_created}</span>
      <span>Dados modificados em: {p.metadata_created}</span>

      <span>Organização: {p.oganizationTitle}</span> */}
   

      <span>{p.tags.map( t => <TagComponent> {t.display_name} </TagComponent>)}</span>

        {/* {children} */}

    </MyWrapper>
  )
}


export default DatasetCard


