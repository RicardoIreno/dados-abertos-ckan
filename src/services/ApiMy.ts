import axios from "axios"
import { SearchDatasetResponse } from 'types'

const ApiMy = axios.create( {baseURL: 'http://localhost:3000/api/'} )


export async function searchDataset( s: string, t?: string[] ) {

  // if (t && t.length > 0) {
  //   let tags = ''
  //   t.forEach( s => tags = tags.concat(`/${s}`) )

  //   return ApiMy.get<SearchDatasetResponse>(`datasets/search/${s}${tags}`)
  //   .then( res => res.data )
    
  // }
      
  if (s !== '') return ApiMy.get<SearchDatasetResponse>(`datasets/search/${s}`)
    .then( res => res.data )   
}


