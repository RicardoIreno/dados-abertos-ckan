import React, { useState, useEffect } from 'react'

import {Wrapper, GridWrapper} from '../components/atoms'
import {DatasetCard} from '../components/molecules'
import Default from '../components/templates/Default'
import styled from 'styled-components'
import { listDatasets } from './api/api'


const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



type Props = {
  datasets: string[]
 } 

export default function Datasets(p: Props) {
	return (

		<Default>

			<MyWrapper>

      <GridWrapper>  
        
        {p.datasets.map( d => <DatasetCard key={d} name={d} /> )}


      </GridWrapper>

			</MyWrapper>

		</Default>
	)
}


export const getServerSideProps = async () => {
  const response = listDatasets()

  return {
    props: {
      datasets: (await response)
    }
  }

}


