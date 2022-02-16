import  {NextApiRequest, NextApiResponse} from 'next'
import {searchDataset} from 'services/adaptersCkan'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {q, s} = req.query
  const resp = await searchDataset(s)
  return res.json( resp )
}