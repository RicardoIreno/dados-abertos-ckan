import ApiCkan from '../services/apiCkan'
import { DatasetListResponse, DatasetInfoResponse, DatasetProps } from '../types/types' 

export function listDatasets() {
  return ApiCkan
    .get<DatasetListResponse>(`package_list` )
    .then(({ data }) => data.result )
}


export function getDataset(id: string): Promise<DatasetProps> {
  return ApiCkan
    .get<DatasetInfoResponse>(`package_show?id=${id}` )
    .then(({ data }) => data.result);
}


export async function getAllDatasets() {
  let allDatasets : DatasetProps[] = []
  const datasetsIDs = (await listDatasets()) 

  for (let i = 0; i < datasetsIDs.length; i++ ) {  
    const resp = ( await getDataset( datasetsIDs[i]) )
    allDatasets.push(resp)
  }
  return allDatasets
} 