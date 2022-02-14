import ApiCkan from '../../../ApiCkan'
import axios from 'axios'
import { 
  ListResponse, 
  DatasetResponse, 
  Dataset, 
  SearchDatasetResponse,
  DatasetsFound,
} from '../../../types/types' 


const ApiMy = axios.create( {baseURL: process.env.NEXT_PUBLIC_ApiMy} )

export function listDatasets() {
  return ApiCkan
    .get<ListResponse>( `package_list` )
    .then(({ data }) => data.result )
}

export function getDataset(id: string | string[]): Promise<Dataset> {
  return ApiCkan
    .get<DatasetResponse>( `package_show?id=${id}` )
    .then(({ data }) => data.result)
} 

export async function searchDataset(q: string | string [] ) {
  return ApiCkan
    .get<SearchDatasetResponse>(`package_search?q=${q}`)
    .then( data => data.data.result);
}


export async function testDatasetFind(q: string | string [] ) {
  return ApiMy
    .get<DatasetsFound>(`search/${q}`)
    .then( res => res.data);
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



