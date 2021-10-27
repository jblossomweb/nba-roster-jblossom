import React from 'react'
import clsx from 'clsx'
import type { Team } from '../../../models'
import TeamLogo from '../../atoms/TeamLogo'
import style from './TeamHeader.module.css'

export type Props = {
  team: Team,
  animate?: boolean,
  animationDelay?: React.CSSProperties['animationDelay'],
}

const TeamHeader: React.FC<Props> = ({
  team,
  animate = true,
  animationDelay,
}) => (
  <div
    className={clsx({
      [style.header]: true,
      [style.animate]: animate,
    })}
    style={{
      animationDelay: animate ? animationDelay : undefined,
      borderColor: team.color,
    }}
  >
    <div className={style.logo}>
      <a
        target="_blank"
        rel="noreferrer"
        aria-label={`${team.name} Homepage`}
        href={`https://www.nba.com/${team.name.toLowerCase()}/`}
      >
        <TeamLogo team={team} />
      </a>
    </div>
    <div className={style.content}>
      <h1>{team.city} {team.name}</h1>
    </div>
  </div>
)

export default TeamHeader
