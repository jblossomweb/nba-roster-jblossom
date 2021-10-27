import React, { useState, useMemo } from 'react'
import debounce from 'lodash.debounce'

import type { Team, Player } from '../../../models'

import LoadingMessage from '../../atoms/LoadingMessage'
import ErrorMessage from '../../atoms/ErrorMessage'
import SearchInput from '../../molecules/SearchInput'
import TeamSelect from '../../molecules/TeamSelect'
import PlayersListVirtualized from '../../organisms/PlayersListVirtualized'

import { teamFilter, searchFilter } from './utils/filters'
import style from './PlayersSearch.module.css'

export type Props = {
  teams: Team[],
  players: Player[],
  loading?: boolean,
  error?: Error
}

const PlayersSearch: React.FC<Props> = ({
  teams = [],
  players = [],
  loading = false,
  error,
}) => {
  const [team, setTeam] = useState('ALL')
  const [search, setSearch] = useState('')
  const [rendering, setRendering] = useState(false)

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = useMemo(() => debounce(event => {
    const { value } = event.target
    setSearch(value)
    delayRendering()
  }, 500), [])

  const handleTeam: React.ChangeEventHandler<HTMLSelectElement> = useMemo(() => debounce(event => {
    const { value } = event.target
    delayRendering()
    setTeam(value)
  }, 1), [])

  const delayRendering = () => {
    setRendering(true)
    setTimeout(() => {
      setRendering(false)
    }, 500)
  }

  const getFilteredPlayers = useMemo(() => () => (
    players
      .filter(searchFilter(search))
      .filter(teamFilter(team))
  ), [players, team, search])

  const filtered = getFilteredPlayers()
  const animate = false

  const teamName = (
    team !== 'ALL' ?
      teams.find(t => t.ta === team)?.name
      : 'All Teams'
  )

  const selectableTeams = team === 'ALL' ? teams.filter(
    t => filtered.map(p => p.ta).includes(t.ta)
  ) : teams

  return (
    <>
      <div className={style.filters}>
        <TeamSelect
          onChange={handleTeam}
          teams={selectableTeams}
          value={team}
        />
        <SearchInput
          onChange={handleSearch}
          value={search}
          placeholder={`Search ${teamName}`}
        />
      </div>
      {!!error && (<ErrorMessage message={error.message} />)}
      {!!(loading || rendering) && (
        <LoadingMessage message="Loading Players" />
      )}
      {!loading && !rendering && !error && (
        <div className={style.results}>
          {!filtered.length ? (
              <div className={style.noresults}>
                No Players Found
              </div>
          ) : (
            <PlayersListVirtualized
              animate={animate}
              teams={teams}
              players={filtered}
            />
          )}
        </div>
      )}
    </>
  )
}

export default PlayersSearch
