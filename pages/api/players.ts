import type { NextApiRequest, NextApiResponse } from 'next'
import type { Player } from '../../models'
import { players } from '../../data'

type Data = Player[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(players)
}
