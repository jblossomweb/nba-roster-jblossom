import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import teams from '../../../data/teams.json'
import TeamLogo from './TeamLogo'

export default {
  title: 'components/atoms/TeamLogo',
  component: TeamLogo,
} as ComponentMeta<typeof TeamLogo>

const Template: ComponentStory<typeof TeamLogo> = args => (
  <TeamLogo {...args} />
)

const team = teams.find(t => t.ta === 'DEN') || teams[0]

export const Sample = Template.bind({})
Sample.args = { team }
