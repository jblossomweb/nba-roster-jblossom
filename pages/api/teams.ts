import type { NextApiRequest, NextApiResponse } from 'next'
import type { Team } from '../../models'
import { teams } from '../../data'

type Data = Team[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(teams)
}
