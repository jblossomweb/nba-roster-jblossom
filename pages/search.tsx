import type { NextPage } from 'next'
import Helmet from 'react-helmet'
import { useTeams, usePlayers } from '../hooks/api'

import DocumentHeader from '../document/DocumentHeader'
import MainTemplate from '../templates/MainTemplate'
import PlayersSearch from '../components/screens/PlayersSearch'

const SearchPage: NextPage = () => {
  const Teams = useTeams()
  const Players = usePlayers()

  const { teams } = Teams
  const { players } = Players
  
  return (
    <>
      <DocumentHeader
        title={`NBA - Search`}
        description={`Search for Players`}
      />

      <Helmet>
        <body className="noscroll"></body>
      </Helmet>

      <MainTemplate>
        <PlayersSearch
          loading={Teams.loading || Players.loading}
          error={Teams.error || Players.error}
          teams={teams}
          players={players}
        />
      </MainTemplate>
    </>
  )
}

export default SearchPage
