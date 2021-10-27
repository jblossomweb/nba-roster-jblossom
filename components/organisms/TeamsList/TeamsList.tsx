import React from 'react'
import type { Team } from '../../../models'
import TeamCard from '../../molecules/TeamCard'
import style from './TeamsList.module.css'

export type Props = {
  teams: Team[],
  animate?: boolean,
}

const TeamsList: React.FC<Props> = ({
  teams = [],
  animate = true,
}) => (
  <div className={style.list}>
    {teams.map(team => (
      <TeamCard
        key={team.ta}
        team={team}
        animate={animate}
      />
    ))}
  </div>
)

export default TeamsList
