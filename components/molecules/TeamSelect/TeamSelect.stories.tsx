import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import teams from '../../../data/teams.json'
import TeamSelect from './TeamSelect'

export default {
  title: 'components/molecules/TeamSelect',
  component: TeamSelect,
} as ComponentMeta<typeof TeamSelect>

const Template: ComponentStory<typeof TeamSelect> = args => (
  <TeamSelect {...args} />
)

const onChange = () => {
  // void
}

export const Sample = Template.bind({})
Sample.args = {
  teams,
  onChange,
}

export const Selected = Template.bind({})
Selected.args = {
  value: 'DEN',
  teams,
  onChange,
}

export const NoTeams = Template.bind({})
NoTeams.args = {
  onChange,
}