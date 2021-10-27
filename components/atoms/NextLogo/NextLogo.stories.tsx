import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NextLogo from './NextLogo'

export default {
  title: 'components/atoms/NextLogo',
  component: NextLogo,
} as ComponentMeta<typeof NextLogo>

const Template: ComponentStory<typeof NextLogo> = args => (
  <NextLogo {...args} />
)

export const Sample = Template.bind({})
Sample.args = {}
