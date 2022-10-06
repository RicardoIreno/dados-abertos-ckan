import {NextApiRequest, NextApiResponse} from 'next'
import {searchDatasetCkan} from 'services/ApiCkan'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {s} = req.query
  const first = s[0]
  const rest: string[] =[]

  for ( let i = 1; i > s.length; i++ ) {
    rest[i-1] = s[i]
  }

  return res.json( await searchDatasetCkan(first, rest) )
}
