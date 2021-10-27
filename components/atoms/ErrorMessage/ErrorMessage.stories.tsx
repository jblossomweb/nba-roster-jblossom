import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ErrorMessage from './ErrorMessage'

export default {
  title: 'components/atoms/ErrorMessage',
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>

const Template: ComponentStory<typeof ErrorMessage> = args => (
  <ErrorMessage {...args} />
)

export const Sample = Template.bind({})
Sample.args = { message: 'Sample Error Message' }
