import axios from "axios"
import { 
  ListResponse, 
  DatasetResponse, 
  Dataset, 
  SearchDatasetResponse,
  StatusResponse,
} from '../types' 

const ApiCkan = axios.create( {baseURL: `http://localhost:5000/api/3/action/`} )
// const ApiCkan = axios.create( {baseURL: `http://dadosabertos.unifesp.br/api/3/action/`} )


export function status() {
  return ApiCkan
    .get<StatusResponse>( `status_show` )
    .then(({ data }) => data.success )
}


export function listDatasets() {
  return ApiCkan
    .get<ListResponse>( `package_list` )
    .then(({ data }) => data.result )
}

export function getDataset(id: string | string[]): Promise<Dataset> {
  if (id !== '') return ApiCkan
    .get<DatasetResponse>( `package_show?id=${id}` )
    .then(({ data }) => data.result)
} 


// == SEARCH DATASET: ROUTE STRUCTURE == 

// Example:
// package_search?q=unifesp&fq=tags:"legado","docentes"


export async function searchDatasetCkan( q: string | string [], tags?: string [] ) {
  if (q !== '') {
    if (tags && tags.length > 0) {
      let stringTags = ''

      switch (tags.length) {
        case 1: 
          stringTags = stringTags.concat(`"${tags[0]}"`)  
        
        default: 
          tags.forEach( s => 
            stringTags = stringTags.concat(',',`"${s}"`) )
      }

      // console.log(`stringTags: ${stringTags}`)
      return ApiCkan
        .get<SearchDatasetResponse>(`package_search?q=${q}&fq=tags:${stringTags}`)
        .then( data => data.data);

    } else {
        return ApiCkan
          .get<SearchDatasetResponse>(`package_search?q=${q}`)
          .then( data => data.data);
    }
  }
}





export async function getAllDatasets() {
  let allDatasets : Dataset[] = []
  const datasetsIDs = (await listDatasets()) 

  for (let i = 0; i < datasetsIDs.length; i++ ) {  
    allDatasets.push( await getDataset( datasetsIDs[i]) )
  }

  return allDatasets
} 



// http://localhost:5000/api/3/action/package_search?fq=tags:alimentos
// http://localhost:5000/api/3/action/package_search?fq=tags:alimentos&fq=tags:cidades


export function searchDatasetByTag(tags: string[]) {
  let q = `fq=tags:`
  if (tags.length > 1 ) {
    for ( let i = 0; i < tags.length; i++ ) {
      q += q.concat( tags[i])
    }
  }

  return ApiCkan
    .get<SearchDatasetResponse>( `package_search?${q}` )
    .then( data => data.data.result);
}


// http://localhost:5000/api/3/action/package_search?fq=organization:organizacaoteste

export function searchDatasetByOrganization(q: string) {
  return ApiCkan
    .get<SearchDatasetResponse>( `package_search?fq=organization${q}` )
    .then( data => data.data.result);
}



