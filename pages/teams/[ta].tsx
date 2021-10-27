import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import teams from '../../data/teams.json'
import type { Team } from '../../models'
import { usePlayers } from '../../hooks/api'

import DocumentHeader from '../../document/DocumentHeader'
import MainTemplate from '../../templates/MainTemplate'
import TeamRoster from '../../components/screens/TeamRoster'
import ErrorMessage from '../../components/atoms/ErrorMessage'

type Props = {
  teams: Team[]
}

const TeamPage: NextPage<Props> = ({ teams }) => {
  const { query } = useRouter()
  const { players, loading, error } = usePlayers()
  const team = query?.ta && teams.find(t => t.ta.toLowerCase() === String(query.ta).toLowerCase())
  const title = team ? `${team.city} ${team.name}` : 'Invalid Team'
  
  return (
    <>
      <DocumentHeader
        title={`NBA - ${title}`}
        description={`Team Page for ${title}`}
      />

      <MainTemplate>
        <>
          {team ? (
            <>
              <TeamRoster
                team={team}
                players={players.filter(p => p.ta === team.ta)}
                loading={loading}
                error={error}
              />
            </>
          ) : (
            <ErrorMessage message={`'${query.ta}' is not a valid team.`}/>
          )}
        </>
      </MainTemplate>
    </>
  )
}

TeamPage.getInitialProps = async () => ({ teams })

export default TeamPage
