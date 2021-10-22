import type { NextApiRequest, NextApiResponse } from 'next'
import Player from '../../models/player'
import players from '../../data/players.json'

type Data = Player[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(players)
}
