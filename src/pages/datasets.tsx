import React, { useState, useEffect } from 'react'

import {Wrapper, GridWrapper} from '../components/atoms'
import {DatasetCard} from '../components/molecules'
import Default from '../components/templates/Default'
import styled from 'styled-components'
import {DatasetListResponse, DatasetPrevInfo} from '../types/Types' 
import { listDatasets } from './api/api'


const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// type Props = {
//   datasets: DatasetListResponse
//  }


type Props = {
  datasets: string[]
 } 


const Datasets = (p: Props)  => {
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
  const resp = (await response)

  return {
    props: {
      datasets: resp
    }
  }

}

export default Datasets
