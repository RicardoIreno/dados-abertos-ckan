import { Wrapper } from 'components/atoms'
import { HeadApp } from 'components/molecules'
import {Search, DatasetsShowcase} from 'components/organisms'
import Default from 'components/templates/Default'
import styled from 'styled-components'


const MyWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Test() {
  return (
    <>
      <HeadApp />

      <Default>
        <Search />
        
        <MyWrapper>
          <DatasetsShowcase />
          
        </MyWrapper>
      </Default>

    </>
  )
}




