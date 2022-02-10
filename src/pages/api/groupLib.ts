import ApiCkan from '../../apiCkan'
import { ListResponse } from '../../types/types'

export function listDatasets() {
  return ApiCkan
    .get<ListResponse>( `group_list` )
    .then(({ data }) => data.result )
}

// http://ckan:5000/api/3/action/group_list?all_fields=true