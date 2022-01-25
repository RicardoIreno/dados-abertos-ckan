import ApiCkan from '../services/apiCkan'
import { ListResponse } from '../types/types'

export function listDatasets() {
  return ApiCkan
    .get<ListResponse>( `tag_list` )
    .then(({ data }) => data.result )
}

