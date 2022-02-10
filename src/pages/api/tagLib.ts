import ApiCkan from '../../apiCkan'
import { ListResponse } from '../../types/types'

export function listTags() {
  return ApiCkan
    .get<ListResponse>( `tag_list` )
    .then(({ data }) => data.result )
}


export function listTopTags( limit: number) {
  return ApiCkan
    .get<ListResponse>( `package_search?facet.field=[%22tags%22]&facet.limit=${limit}&rows=0` )
    .then(({ data }) => data.result )
}

// http://localhost:5000/api/3/action/package_search?facet.field=[%22tags%22]&facet.limit=$10&rows=0




