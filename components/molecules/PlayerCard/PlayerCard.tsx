import React from 'react'
import clsx from 'clsx'
import type { Team, Player } from '../../../models'
import PlayerHeadshot from '../../atoms/PlayerHeadshot'
import TeamLogo from '../../atoms/TeamLogo'
import style from './PlayerCard.module.css'

export type Props = {
  player: Player,
  team?: Team,
  animate?: boolean,
  animationDelay?: React.CSSProperties['animationDelay'],
  onLoad?: React.ReactEventHandler<HTMLImageElement>
}

const playerBio = (player: Player) =>
  `https://www.nba.com/player/${player.pid}/${player.slug}`

const PlayerCard: React.FC<Props> = ({
  player,
  team,
  animate = true,
  animationDelay,
  onLoad,
}) => (
  <a
    className={clsx({
      [style.card]: true,
      [style.animate]: animate,
    })}
    style={animate ? { animationDelay } : undefined}
    href={playerBio(player)}
    target="_blank"
    rel="noreferrer"
  >
    {team && (
      <>
        <div className={style['bg-logo']}>
          <TeamLogo
            team={team}
            width={268}
            height={268}
            role="presentation"
          />
        </div>
        <div className={style['fg-logo']}>
          <TeamLogo
            team={team}
            width={40}
            height={40}
          />
        </div>
      </>
    )}
    <div className={style.content}>
      <div
        className={style.top}
        style={{ borderColor: team?.color }}
      >
        <div className={style.headshot}>
          {!!player.headshot?.length && (
            <PlayerHeadshot
              player={player}
              width={115}
              height={84}
              onLoad={onLoad}
              animate={animate}
              animationDelay={
                animate ? animationDelay : undefined
              }
            />
          )}
        </div>
        <div className={style.info}>
          <p>#{player.num} | { player.pos }</p>
          <h4>{player.fn}<br />{player.ln}</h4>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.stat}>
          <h4>PPG</h4>
          <p>{player.pts || '0'}</p>
        </div>
        <div className={style.stat}>
          <h4>RPG</h4>
          <p>{player.reb || '0'}</p>
        </div>
        <div className={style.stat}>
          <h4>APG</h4>
          <p>{player.ast || '0'}</p>
        </div>
      </div>
    </div>
  </a>
)

export default PlayerCard
