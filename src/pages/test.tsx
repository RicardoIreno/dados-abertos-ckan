import { 
   AtomWrapper,
   MolHeadApp,
   MolCollapsible,
   OrgSearch,
   OrgDatasetsShowcase,
   TemplateDefault
 } from 'components'

import styled from 'styled-components'
import {GetAllTagsResponse} from 'types'
import {getAllTags} from 'services/ApiCkan'

const MyWrapper = styled(AtomWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

type Props = {
   tags: string[]
}

export async function getServerSideProps() {
   const tags = await getAllTags()
   console.log(tags.result)

   return {
     props: {
        tags: tags.result
     },
   }
 }
 

export default function Test( props: Props ) {
  return (
    <>
      <MolHeadApp />

      <TemplateDefault>
        <OrgSearch />
        
        <MyWrapper>
          {/* <DatasetsShowcase /> */}

          <MolCollapsible open title="Etiquetas" tagArr={props.tags} />
          
          
        </MyWrapper>
      </TemplateDefault>

    </>
  )
}

const TagArr: Tag[]  = [
  {
     vocabulary_id:'',
     state:"active",
     display_name:"2019",
     id:"a55d719c-cd1d-4169-837c-4e8e40f5ba509",
     name:"2019"
  },
  {
     vocabulary_id:'',
     state: "active",
     display_name:"docentes",
     id:"670d779e-193e-4713-ba7c-0ff73b930790",
     name:"docentes"
  },
  {
     vocabulary_id:'',
     state:"active",
     display_name:"legado",
     id:"4e35b378-c5b9-46b9-b22e-54a5ec1e21b1",
     name:"legado"
  },
  {
     vocabulary_id:'',
     state:"active",
     display_name:"sal\u00e1rio",
     id:"4b6zf64b-2c48-f1f1c-82dd-a3b9de0866bb9",
     name:"salario"
  },
  {
    vocabulary_id:'',
    state:"active",
    display_name:"frutas",
    id:"a55d719c-cd18-4fg69-837c-4e8e40f5za54",
    name:"frutas"
 },
 {
    vocabulary_id:'',
    state: "active",
    display_name:"professores",
    id:"670d779e-293e-4713-ba7c-0ff73b931790",
    name:"professores"
 },
 {
    vocabulary_id:'',
    state:"active",
    display_name:"2018",
    id:"4e35bf78-c5b9-46b9-b22e-54a5ec1e26aa",
    name:"2018"
 },
 {
    vocabulary_id:'',
    state:"active",
    display_name:"teste",
    id:"4b6ff64b-2c48-4f1c-82dd-a3sdde080bb9",
    name:"teste"
 }
]



