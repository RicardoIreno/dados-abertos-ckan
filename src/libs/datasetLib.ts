import ApiCkan from '../services/apiCkan'
import { 
  ListResponse, 
  DatasetResponse, 
  Dataset, 
  SearchDatasetResponse,
  SearchDataset,
} from '../types/types' 


export function listDatasets() {
  return ApiCkan
    .get<ListResponse>( `package_list` )
    .then(({ data }) => data.result )
}

export function getDataset(id: string): Promise<Dataset> {
  return ApiCkan
    .get<DatasetResponse>( `package_show?id=${id}` )
    .then(({ data }) => data.result)
}


export function searchDataset(q: string) {
  return ApiCkan
    .get<SearchDatasetResponse>( `package_search?q=${q}` )
    .then( data => data.data.result);
}





export async function getAllDatasets() {
  let allDatasets : Dataset[] = []
  const datasetsIDs = (await listDatasets()) 

  for (let i = 0; i < datasetsIDs.length; i++ ) {  
    allDatasets.push( await getDataset( datasetsIDs[i]) )
  }

  return allDatasets
} 

