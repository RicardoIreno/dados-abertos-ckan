
import axios from "axios"
import { baseURL } from "../../configs/configs"
import { DatasetListResponse } from '../../types/Types' 

// const Api = axios.create({baseURL})

export function listDatasets() {
  return axios
    .get<DatasetListResponse>(`${baseURL}api/3/action/package_list` )
    .then(({ data }) => data.result )
}



// export function getDatasets() {
//   let resp: string[]  
  
//   listDatasets()
//   .then( value => resp = value )

//   console.log(resp)

//   // return resp
// }


// export function showDataset(id: string) {
//   return axios
//     .get<DatasetPrevInfo>( `${baseURL}api/3/action/package_show?id=${id}` )
//     .then(({ data }) => data);
// }

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