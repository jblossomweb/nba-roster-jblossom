import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pill from './Pill'

export default {
  title: 'components/atoms/Pill',
  component: Pill,
} as ComponentMeta<typeof Pill>

const Template: ComponentStory<typeof Pill> = args => (
  <Pill {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  children: (<div>child content</div>)
}
