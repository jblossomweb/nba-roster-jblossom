import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import teams from '../../../data/teams.json'
import TeamsList from './TeamsList'

export default {
  title: 'components/organisms/TeamsList',
  component: TeamsList,
} as ComponentMeta<typeof TeamsList>

const Template: ComponentStory<typeof TeamsList> = args => (
  <TeamsList {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  teams,
}

export const NoTeams = Template.bind({})
NoTeams.args = {
}

// export const NoAnimate = Template.bind({})
// NoAnimate.args = {
//   teams,
//   animate: false,
// }
