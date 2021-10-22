import type { NextApiRequest, NextApiResponse } from 'next'
import Team from '../../models/team'
import teams from '../../data/teams.json'

type Data = Team[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(teams)
}
