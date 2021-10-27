import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import players from '../../../data/players.json'
import teams from '../../../data/teams.json'
import PlayersSearch from './PlayersSearch'

export default {
  title: 'components/screens/PlayersSearch',
  component: PlayersSearch,
} as ComponentMeta<typeof PlayersSearch>

const Template: ComponentStory<typeof PlayersSearch> = args => (
  <PlayersSearch {...args} />
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

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}

export const HasError = Template.bind({})
HasError.args = {
  error: new Error('This is an Error Message'),
}
