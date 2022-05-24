import axios from "axios"
import { SearchDatasetResponse } from 'types'

const ApiMy = axios.create( {baseURL: 'https://dados-abertos-ckan.vercel.app/api/'} )

 
export async function searchDataset( q: string, t?: string[] ) {
  
  if (q !== '') {
    if (t && t.length > 0) {
      let stringTags = ''
      t.forEach ( i => stringTags = stringTags.concat(`/${i}`) )  
      
      return ApiMy.get<SearchDatasetResponse>(`datasets/search/${q}${stringTags}`)
        .then( res => res.data )
    }
    return ApiMy.get<SearchDatasetResponse>(`datasets/search/${q}`)
      .then( res => res.data )     
  }
}

export async function searchDatasets( s?: string, t?: string[]  ) {
  if (s || t) {
    let queryData = {
      term: s,
      tags: t
    } 

    let config = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ queryData })
    }
    
    return ApiMy.post<SearchDatasetResponse>(`datasets/search`,{
      term: s,
      tags: t
    },  config)
    .then( res => res.data )   
  } 
}