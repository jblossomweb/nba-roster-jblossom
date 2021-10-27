import type Team from './team.d.ts'

type Player = {
  pid: number,
  ln: string,
  fn: string,
  ta: Team['ta'],
  num: string,
  pos: string,
  pts: number | null,
  reb: number | null,
  ast: number | null,
  stl: number | null,
  headshot: string,
  slug: string
}

export default Player
