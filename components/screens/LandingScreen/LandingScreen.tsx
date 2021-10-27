import React from 'react'
import Link from 'next/link'

import Pill from '../../atoms/Pill'
import NbaLove from '../../atoms/NbaLove'
import NextLogo from '../../atoms/NextLogo'
import style from './LandingScreen.module.css'

export type Props = {
}

const LandingScreen: React.FC = () => (
  <div className={style.screen}>
    <div className={style.content}>
      <div className={style.image}>
        <NbaLove />
      </div>
      <div className={style.links}>
        <Link href="/teams" as="/teams" passHref>
          <a aria-label="Team Rosters (basic)">
            <Pill className={style.pill} width={240}>
              <>
                <h1>Team Rosters</h1>
                <h2>(basic)</h2>
              </>
            </Pill>
          </a>
        </Link>
        <Link href="/search" as="/search" passHref>
          <a aria-label="Search Players (experimental)">
            <Pill className={style.pill} width={240}>
              <>
                <h1>Search Players</h1>
                <h2>(experimental)</h2>
              </>
            </Pill>
          </a>
        </Link>
      </div>
      <div className={style.image}>
        <NextLogo />
      </div>
    </div>
  </div>
)

export default LandingScreen
