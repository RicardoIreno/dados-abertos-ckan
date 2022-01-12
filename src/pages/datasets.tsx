import {Wrapper, GridWrapper} from '../components/atoms'
import {DatasetCard} from '../components/molecules'
import Default from '../components/templates/Default'
import styled from 'styled-components'
import { getAllDatasets } from '../libs/dataset'
import { DatasetInfoResult } from '../types/types'


const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



type Props = {
  allDatasets: DatasetInfoResult[]
 } 


 export const getServerSideProps = async () => {

  return {
    props: {
      allDatasets: (await getAllDatasets())
    }
  }

}


export default function Datasets(p: Props) {
	return (

		<Default>

			<MyWrapper>
        
        {p.allDatasets.map( d => 
          <DatasetCard key={d.name} 
            name={d.title} 
            title={d.title}
            tags={d.tags}
            resources={d.resources}
          /> )}

			</MyWrapper>

		</Default>
	)
}




