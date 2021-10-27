import React from 'react'
import { AutoSizer, List } from 'react-virtualized'

import type { Team, Player } from '../../../models'
import PlayerCard from '../../molecules/PlayerCard'

import styles from './PlayersListVirtualized.module.css'

export type Props = {
  teams: Team[],
  players: Player[],
  animate?: boolean,
}

type SizedRow = {
  index: number,
  key: string | number,
  style: React.CSSProperties,
}

const PlayersListVirtualized: React.FC<Props> = ({
  teams = [],
  players = [],
  animate = true,
}) => (
  <div className={styles.parent}>
    <AutoSizer>
      {({ height, width }) => {
        const { min, floor, ceil } = Math
        const itemsPerRow = min(floor(width / 316) || 1, 5)
        const rowCount = ceil(players.length / itemsPerRow)
        const lastRowItems = players.length % itemsPerRow
        const lastRowHoles = lastRowItems ? itemsPerRow - lastRowItems : 0
        
        return (
          <List
            className={styles.list}
            width={width}
            height={height}
            rowCount={rowCount}
            rowHeight={180}
            rowRenderer={({ index, key, style }: SizedRow) => {
              const items: React.ReactElement[] = []
              const fromIndex = index * itemsPerRow
              const toIndex = Math.min(fromIndex + itemsPerRow, players.length)
              const isLastRow = index + 1 === rowCount

              for (let i = fromIndex; i < toIndex; i++) {
                const player = players[i]
                const team = teams.find(({ ta }) => ta === player.ta)
                const visibleIndex = i - fromIndex
                const animationDelay = animate ? `${(visibleIndex * 0.1)}s` : undefined
                items.push(
                  <div className={styles.item} key={i}>
                    <PlayerCard
                      player={player}
                      team={team}
                      animate={animate}
                      animationDelay={animationDelay}
                    />
                  </div>
                )
              }

              if (isLastRow) {
                for (let h = 0; h < lastRowHoles; h++) {
                  items.push(
                    <div className={styles.item} key={toIndex + h}>
                      &nbsp;
                    </div>
                  )
                }
              }

              return (
                <div className={styles.row} key={key} style={style}>
                  {items}
                </div>
              )
            }}
          />
        )
      }}
    </AutoSizer>
  </div>
)

export default PlayersListVirtualized
