import type { NextPage } from 'next'
import type { Team } from '../models'
import teams from '../data/teams.json'

import DocumentHeader from '../document/DocumentHeader'
import MainTemplate from '../templates/MainTemplate'
import TeamsList from '../components/organisms/TeamsList'

type Props = {
  teams: Team[]
}

const TeamsPage: NextPage<Props> = ({ teams }) => {
  
  return (
    <>
      <DocumentHeader
        title={`NBA - Teams`}
        description={`List of NBA Teams`}
      />

      <MainTemplate>
        <TeamsList teams={teams} />
      </MainTemplate>
    </>
  )
}

TeamsPage.getInitialProps = async () => ({ teams })

export default TeamsPage
