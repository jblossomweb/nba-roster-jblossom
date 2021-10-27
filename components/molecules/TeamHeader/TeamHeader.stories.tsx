import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import teams from '../../../data/teams.json'
import TeamHeader from './TeamHeader'

export default {
  title: 'components/molecules/TeamHeader',
  component: TeamHeader,
} as ComponentMeta<typeof TeamHeader>

const Template: ComponentStory<typeof TeamHeader> = args => (
  <TeamHeader {...args} />
)

const team = teams.find(t => t.ta === 'ORL') || teams[0]

export const Sample = Template.bind({})
Sample.args = {
  team,
}

export const NoAnimate = Template.bind({})
NoAnimate.args = {
  team,
  animate: false,
}

export const NoLogo = Template.bind({})
NoLogo.args = {
  team: {
    ...team,
    logo: '',
  },
}
