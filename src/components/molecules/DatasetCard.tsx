import React, { ReactNode } from 'react'
import styled from 'styled-components'
import {Wrapper, TagComponent} from '../atoms'
import { DatasetProps } from '../../types/Types'

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
  font-size: ${props => props.theme.sizes.DatasetCardTitle};
  font-family: ${props => props.theme.tipography.special};
  color: ${props => props.theme.colors.DatasetCardTitle};
`

type Props = {
  children?: ReactNode
  dataset: DatasetProps
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
      <Title>{p.dataset.title}</Title>

      <p>{p.dataset.resources.map( r => r.description)}</p>


      <span>{p.dataset.tags.map( t => <TagComponent key={t.id}> {t.display_name} </TagComponent>)}</span>

        {/* {children} */}

    </MyWrapper>
  )
}


export default DatasetCard


