import {NextApiRequest, NextApiResponse} from 'next'
import {searchDatasetCkan} from 'services/ApiCkan'

type BodyRequest = {
  term?: string,
  tags?: string[]
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body: BodyRequest = req.body
  if ( body.term || body.tags )
    return res.json( await searchDatasetCkan(body.term, body.tags) )
} 
// console.log(`API - Term: ${body.term}, Tags: ${body.tags}`)