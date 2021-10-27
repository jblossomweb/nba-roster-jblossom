import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import players from '../../../data/players.json'
import PlayerHeadshot from './PlayerHeadshot'

export default {
  title: 'components/atoms/PlayerHeadshot',
  component: PlayerHeadshot,
} as ComponentMeta<typeof PlayerHeadshot>

const Template: ComponentStory<typeof PlayerHeadshot> = args => (
  <PlayerHeadshot {...args} />
)

const player = players.find(p => p.fn.toLowerCase() === 'aaron' && p.ln.toLowerCase() === 'gordon') || players[2]

export const Sample = Template.bind({})
Sample.args = { player }
