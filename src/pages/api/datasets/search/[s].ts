import  {NextApiRequest, NextApiResponse} from 'next'
import axios from 'axios'  
import { SearchDatasetResponse } from 'types'

const URL = 'http://localhost:5000/api/3/action/'
const Call = axios.create( { baseURL: URL } )


async function callApi( s: string | string[] ) {
  return Call.get<SearchDatasetResponse>(`package_search?q=${s}`)
  .then( res => res.data.result );
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {q, s} = req.query
  const resp = await callApi(s)
  return res.json( resp )

  // try {
  //   const resp = await searchDataset(s.toString())
  //   return res.status(200).json(resp)

  // } catch (err) {
  //   return res.json({messgae: 'Deu ruim', error: err})
  // }
}