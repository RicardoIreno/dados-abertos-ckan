import {NextApiRequest, NextApiResponse} from 'next'
import {searchDatasetCkan} from 'services/ApiCkan'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {s} = req.query
  return res.json( await searchDatasetCkan(s) )
}
