import React from 'react'
import Image from 'next/image'
import type { Team } from '../../../models'

export type Props = {
  team: Team,
  width?: number,
  height?: number,
  role?: 'img' | 'presentation'
}

const TeamLogo: React.FC<Props> = ({
  team,
  width = 80,
  height = 80,
  role = 'img',
}) => (
  <Image
    src={team.logo}
    alt={`${team.city} ${team.name}`}
    title={`${team.city} ${team.name}`}
    aria-label={`${team.city} ${team.name}`}
    role={role}
    width={width}
    height={height}
    priority
  />
)

export default TeamLogo
