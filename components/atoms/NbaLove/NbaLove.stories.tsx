import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NbaLove from './NbaLove'

export default {
  title: 'components/atoms/NbaLove',
  component: NbaLove,
} as ComponentMeta<typeof NbaLove>

const Template: ComponentStory<typeof NbaLove> = args => (
  <NbaLove {...args} />
)

export const Sample = Template.bind({})
Sample.args = {}
