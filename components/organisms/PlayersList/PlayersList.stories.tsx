import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import allPlayers from '../../../data/players.json'
import teams from '../../../data/teams.json'
import PlayersList from './PlayersList'

export default {
  title: 'components/organisms/PlayersList',
  component: PlayersList,
} as ComponentMeta<typeof PlayersList>

const Template: ComponentStory<typeof PlayersList> = args => (
  <PlayersList {...args} />
)

const players = allPlayers.filter(p => p.ta === teams[0].ta)

export const Sample = Template.bind({})
Sample.args = {
  players,
  teams,
}

export const NoTeams = Template.bind({})
NoTeams.args = {
  players,
}

export const NoPlayers = Template.bind({})
NoPlayers.args = {
  teams,
}

export const NoAnimate = Template.bind({})
NoAnimate.args = {
  players,
  teams,
  animate: false,
}
