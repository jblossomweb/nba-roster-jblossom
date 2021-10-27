import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import type { Player } from '../../../models'
import style from './PlayerHeadshot.module.css'

export type Props = {
  player: Player,
  width?: number,
  height?: number,
  animate?: boolean,
  animationDelay?: React.CSSProperties['animationDelay'],
  onLoad?: React.ReactEventHandler<HTMLImageElement>
}

const PlayerHeadshot: React.FC<Props> = ({
  player,
  width = 120,
  height = 90,
  animate = true,
  animationDelay,
  onLoad,
}) => (
  <div
    className={clsx({
      [style.image]: true,
      [style.animate]: animate,
    })}
    style={animate ? { animationDelay } : undefined}
  >
    <Image
      src={player.headshot}
      alt={`${player.fn} ${player.ln}`}
      title={`${player.fn} ${player.ln}`}
      aria-label={`${player.fn} ${player.ln}`}
      role="img"
      width={width}
      height={height}
      onLoad={onLoad}
    />
  </div>
)

export default PlayerHeadshot
