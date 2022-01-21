import {Wrapper} from '../components/atoms'
import {DatasetCard} from '../components/molecules'
import Default from '../components/templates/Default'
import styled from 'styled-components'
import { getAllDatasets } from '../libs/datasetLib'
import { DatasetProps } from '../types/types'


const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



type Props = {
  allDatasets: DatasetProps[]
 } 


 export const getServerSideProps = async () => {

  return {
    props: {
      allDatasets: (await getAllDatasets())
      // revalidade: 60 * 60 * 24 // 24 hrs
    }
  }

}


export default function Datasets(p: Props) {
	return (

		<Default>

			<MyWrapper>
        
        {p.allDatasets.map( d => 
          <DatasetCard key={d.name} dataset={d} /> )}

			</MyWrapper>

		</Default>
	)
}




