import { 
  AtomWrapper, 
  MolHeadApp,
  OrgSearch,
  OrgDatasetsShowcase,
  TemplateDefault
} from 'components'
import styled from 'styled-components'


const MyWrapper = styled(AtomWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <>
      <MolHeadApp />

      <TemplateDefault>
        <OrgSearch />

        <MyWrapper>
          <OrgDatasetsShowcase />
          
        </MyWrapper>
      </TemplateDefault>

    </>
  )
}




