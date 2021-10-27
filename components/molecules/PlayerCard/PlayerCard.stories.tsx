import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import players from '../../../data/players.json'
import teams from '../../../data/teams.json'
import PlayerCard from './PlayerCard'

export default {
  title: 'components/molecules/PlayerCard',
  component: PlayerCard,
} as ComponentMeta<typeof PlayerCard>

const Template: ComponentStory<typeof PlayerCard> = args => (
  <PlayerCard {...args} />
)

const player = players.find(p => p.fn.toLowerCase() === 'lebron' && p.ln.toLowerCase() === 'james') || players[0]
const team = teams.find(({ ta }) => ta === player.ta)

export const Sample = Template.bind({})
Sample.args = {
  player,
  team,
}

export const NoTeam = Template.bind({})
NoTeam.args = {
  player,
}

export const NoHeadshot = Template.bind({})
NoHeadshot.args = {
  player: {
    ...player,
    headshot: ''
  },
  team,
}

export const BrokenHeadshot = Template.bind({})
BrokenHeadshot.args = {
  player: {
    ...player,
    headshot: 'https://nowhere.com/broken.gif'
  },
  team,
}
