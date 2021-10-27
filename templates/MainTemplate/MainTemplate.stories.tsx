import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MainTemplate from './MainTemplate'

export default {
  title: 'templates/MainTemplate',
  component: MainTemplate,
} as ComponentMeta<typeof MainTemplate>

const Template: ComponentStory<typeof MainTemplate> = args => (
  <MainTemplate {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  children: (<div>child content</div>)
}
Sample.parameters = { layout: 'fullscreen' }