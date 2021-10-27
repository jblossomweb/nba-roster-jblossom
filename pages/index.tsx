import type { NextPage } from 'next'

import DocumentHeader from '../document/DocumentHeader'
import MainTemplate from '../templates/MainTemplate'
import LandingScreen from '../components/screens/LandingScreen'

const IndexPage: NextPage = () => (
  <>
    <DocumentHeader
      title={`NBA - I Love This Game`}
      description={`NBA Sample Project`}
    />

    <MainTemplate>
      <>
        <LandingScreen />
      </>
    </MainTemplate>
  </>
)

export default IndexPage
