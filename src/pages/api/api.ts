
import axios from "axios"
import { baseURL } from "../../configs/configs"
import { DatasetListResponse, DatasetInfoResponse, DatasetInfoResult } from '../../types/types' 

// const Api = axios.create({baseURL})

export function listDatasets() {
  return axios
    .get<DatasetListResponse>(`${baseURL}api/3/action/package_list` )
    .then(({ data }) => data.result )
}



export function getDataset(id: string) {
  return axios
    .get<DatasetInfoResponse>( `${baseURL}api/3/action/package_show?id=${id}` )
    .then(({ data }) => data.result);
}



export async function getAllDatasets() {
  const listDatasetsResponse = listDatasets()
  const datasetsIDs = (await listDatasetsResponse) 

  let datasetsListInfo: DatasetInfoResult[]

  datasetsIDs.map( async id => { 
    let resp = getDataset(id)

    let getDatasetResponse = (await resp)
    datasetsListInfo.push(getDatasetResponse)
  
  });

  return datasetsListInfo

}

// export async function makeCards() {
//   const datasets = await listDatasets()
//   const list = datasets

//   let datasetsInfos: DatasetPrevInfoList = []
  
//   list.map( d => datasetsInfos = showDataset(d) )



//     return console.log(list)

// }


// export function showDataset(id) {
//   return axios
//     .get(`http://ckan:5000/api/3/action/package_show?id=${id}`)
//     .then(({ data }) => data.result);
// }

// export function searchDatasets({
//   search = "",
//   sort = "",
//   page = 1,
//   paramFilters = {},
// }) {
//   let url = `/bd_dataset_search?q=${search}&page=${page}`;
//   let entries = Object.entries(paramFilters);

//   if (search == null) return { count: 0, results: [] };

//   if (sort) {
//     url += "&order_by=" + encodeURI(sort);
//   }

//   if (entries.length > 0) {
//     Object.entries(paramFilters).forEach(([k, v]) => {
//       if (v.length == 0 || !v) return;

//       url += `&${k}=${v.join(",")} `;
//     });
//   }

//   return axiosInstance.get(url).then(({ data }) => data.result);
// }

// export function getPopularDatalakeDatasets() {
//   return axios
//     .get(
//       `http://ckan:5000/api/3/action/bd_dataset_search?q=&page=1&order_by=popular&resource_type=bdm_table`
//     )
//     .then(({ data }) => data.result.datasets);
// }