import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import allTeams from '../../../data/teams.json'
import allPlayers from '../../../data/players.json'

import TeamRoster from './TeamRoster'

export default {
  title: 'components/screens/TeamRoster',
  component: TeamRoster,
} as ComponentMeta<typeof TeamRoster>

const Template: ComponentStory<typeof TeamRoster> = args => (
  <TeamRoster {...args} />
)

const team = allTeams.find(t => t.ta === 'CHI') || allTeams[0]
const players = allPlayers.filter(p => p.ta === team.ta)

export const Sample = Template.bind({})
Sample.args = { team, players }

export const Loading = Template.bind({})
Loading.args = { team, loading: true }

export const HasError = Template.bind({})
HasError.args = { team, error: new Error('This is an Error Message') }
