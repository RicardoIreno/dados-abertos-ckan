import { MyApi } from "../services/MyApi";
import { DatasetsFound } from "../types/types";

export async function testDatasetFind(q: string | string [] ) {
  return MyApi
    .get<DatasetsFound>(`search/${q}`)
    .then( res => res.data.results);
}
