import ApiMy from './ApiMy'
import { DatasetsFound } from 'types'


export async function searchDataset( s: string, t?: string[] ) {
  let stringTags = '' 
  
  if (s !== '') return ApiMy.get<DatasetsFound>(`datasets/search/${s}`)
    .then( res => res.data )

  
    
}