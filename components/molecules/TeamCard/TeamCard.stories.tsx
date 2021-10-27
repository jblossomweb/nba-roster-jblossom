import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import teams from '../../../data/teams.json'
import TeamCard from './TeamCard'

export default {
  title: 'components/molecules/TeamCard',
  component: TeamCard,
} as ComponentMeta<typeof TeamCard>

const Template: ComponentStory<typeof TeamCard> = args => (
  <TeamCard {...args} />
)

const team = teams.find(t => t.ta === 'MIA') || teams[0]

export const Sample = Template.bind({})
Sample.args = {
  team,
}

export const NoLogo = Template.bind({})
NoLogo.args = {
  team: {
    ...team,
    logo: ''
  },
}
