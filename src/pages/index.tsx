import { 
  SiteHead,
  SearchTerm,
  DatasetsShowcase,
  TemplateDefault
} from 'components'


export default function Home() {
  return (
    <>
      <SiteHead />

      <TemplateDefault>
        <SearchTerm />

        <div>
          <DatasetsShowcase />
          
        </div>
      </TemplateDefault>

    </>
  )
}




