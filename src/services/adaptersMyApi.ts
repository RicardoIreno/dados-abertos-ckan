import ApiMy from './ApiMy'
import { DatasetsFound } from 'types'


export async function searchDataset( s: string ) {
  return ApiMy.get<DatasetsFound>(`datasets/search/${s}`)
  .then( res => res.data )
}