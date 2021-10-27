import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LandingScreen from './LandingScreen'

export default {
  title: 'components/screens/LandingScreen',
  component: LandingScreen,
} as ComponentMeta<typeof LandingScreen>

const Template: ComponentStory<typeof LandingScreen> = args => (
  <LandingScreen {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
}
