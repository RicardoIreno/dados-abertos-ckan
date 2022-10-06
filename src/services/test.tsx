import React, {  ReactNode } from 'react'
import {getAllTags} from 'services/ApiCkan'
import {
	Collapsible,
  SearchTerm,
  DatasetsShowcase,
  SearchOrchestrator,
  TemplateDefault,
} from 'components'
import { TemplateSearchPageCSS } from 'styles/TemplateSearchPageCSS'

type Props = {
  children: ReactNode
  tags: string[]
}

export async function getServerSideProps() {
  const tags = await getAllTags()
  return {
    props: {
       tags: tags.result
    },
  }
}

export default function test(props: Props )  {
	return (
		<TemplateDefault>
      <SearchOrchestrator>  
        <div className={TemplateSearchPageCSS()}>
          
          <SearchTerm />

          <div className='grid'>
            <div className='left'>
              <Collapsible open title="Etiquetas" tagArr={props.tags} />
            </div>

            <div className='right'>
              <DatasetsShowcase />
            </div>
          </div>

        </div>
      </SearchOrchestrator>
		</TemplateDefault>
	)
}
