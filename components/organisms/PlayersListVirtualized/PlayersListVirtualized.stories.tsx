import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import players from '../../../data/players.json'
import teams from '../../../data/teams.json'
import PlayersListVirtualized from './PlayersListVirtualized'

export default {
  title: 'components/organisms/PlayersListVirtualized',
  component: PlayersListVirtualized,
} as ComponentMeta<typeof PlayersListVirtualized>

const Template: ComponentStory<typeof PlayersListVirtualized> = args => (
  <PlayersListVirtualized {...args} />
)

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
