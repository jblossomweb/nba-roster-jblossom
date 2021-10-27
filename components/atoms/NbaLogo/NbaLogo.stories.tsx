import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NbaLogo from './NbaLogo'

export default {
  title: 'components/atoms/NbaLogo',
  component: NbaLogo,
} as ComponentMeta<typeof NbaLogo>

const Template: ComponentStory<typeof NbaLogo> = args => (
  <NbaLogo {...args} />
)

export const Sample = Template.bind({})
Sample.args = {}
