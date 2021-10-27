import type { Team, Player } from '../../../../models'

export const teamFilter = (ta: Team['ta']) => (player: Player) => (
  ta === 'ALL' || player.ta === ta 
)

export const searchFilter = (search: string) => (player: Player) => (
  !search?.length ? true :
    player.fn.toLowerCase().startsWith(search.toLowerCase()) ||
  player.ln.toLowerCase().startsWith(search.toLowerCase()) ||
  (`${player.fn.toLowerCase()} ${player.ln.toLowerCase()}`).startsWith(search.toLowerCase())
)
