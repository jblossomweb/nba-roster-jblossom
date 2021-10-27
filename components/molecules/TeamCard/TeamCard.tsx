import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import type { Team } from '../../../models'
import TeamLogo from '../../atoms/TeamLogo'
import style from './TeamCard.module.css'

export type Props = {
  team: Team,
  animate?: boolean,
  animationDelay?: React.CSSProperties['animationDelay'],
}

const TeamCard: React.FC<Props> = ({
  team,
  animate = true,
  animationDelay,
}) => (
  <Link href="/teams/[ta]" as={`/teams/${team.ta}`} passHref>
    <a
      className={clsx({
        [style.card]: true,
        [style.animate]: animate,
      })}
      style={animate ? { animationDelay } : undefined}
    >
      <div className={style.content}>
        <div
          className={style.top}
          style={{borderColor: team?.color}}
        >
          <div className={style.logo}>
            <TeamLogo team={team} />
          </div>
        </div>
        <div className={style.bottom}>
          <div>
            { team.city } {team.name}
          </div>
        </div>
      </div>
    </a>
  </Link>
)

export default TeamCard
