import  {NextApiRequest, NextApiResponse} from 'next'
import { searchDataset } from '../../../../libs/datasetLib'
  
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {q, s} = req.query
  console.log(`s: ${s}`)
  // if (s == undefined) return {}
  
  try {
    const resp = await searchDataset(s.toString())
    return res.status(200).json(resp)

  } catch (err) {
    return res.json({messgae: 'Deu ruim', error: err})
  }
}