import React from 'react'
import type { Team, Player } from '../../../models'
import PlayerCard from '../../molecules/PlayerCard'
import css from './PlayersList.module.css'

export type Props = {
  teams: Team[],
  players: Player[],
  animate?: boolean,
}

const PlayersList: React.FC<Props> = ({
  teams = [],
  players = [],
  animate = true,
}) => (
  <div className={css.list}>
    {players.map((player, i) => (
      <PlayerCard
        key={player.pid}
        player={player}
        team={teams.find(({ ta }) => ta === player.ta)}
        animate={animate}
        animationDelay={animate ? `${(i * 0.1)}s` : undefined}
      />
    ))}
  </div>
)

export default PlayersList
