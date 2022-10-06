import  {NextApiRequest, NextApiResponse} from 'next'
import { listDatasets } from 'services/ApiCkan'


export default async (req: NextApiRequest, res: NextApiResponse) => {
// req.query
  try {
    const resp = await listDatasets()
    return res.status(200).json(resp)

  } catch (err) {
    return res.send(err)
  } 

}