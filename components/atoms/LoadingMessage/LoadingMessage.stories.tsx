import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoadingMessage from './LoadingMessage'

export default {
  title: 'components/atoms/LoadingMessage',
  component: LoadingMessage,
} as ComponentMeta<typeof LoadingMessage>

const Template: ComponentStory<typeof LoadingMessage> = args => (
  <LoadingMessage {...args} />
)

export const Sample = Template.bind({})
Sample.args = { message: 'I am Loading Something' }
