import React from 'react'
import style from './TeamRoster.module.css'

import LoadingMessage from '../../atoms/LoadingMessage'
import ErrorMessage from '../../atoms/ErrorMessage'
import TeamHeader from '../../molecules/TeamHeader'
import PlayersList from '../../organisms/PlayersList'
import { Team, Player } from '../../../models'

export type Props = {
  team: Team,
  players?: Player[],
  loading?: boolean,
  error?: Error
}

const TeamRoster: React.FC<Props> = ({
  team,
  players,
  loading,
  error,
}) => (
  <div className={style.screen}>
    <TeamHeader team={team} />
    {!!loading && (<LoadingMessage message="Loading Roster" />)}
    {!!error && (<ErrorMessage message={error.message} />)}
    {!loading && !error && !!players && (
      <PlayersList
        teams={[team]}
        players={players}
      />
    )}
    
  </div>
)

export default TeamRoster
