import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchInput from './SearchInput'

export default {
  title: 'components/molecules/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
)

const onChange = () => {
  // void
}

export const Sample = Template.bind({})
Sample.args = {
  onChange,
}

export const Populated = Template.bind({})
Populated.args = {
  value: 'Lebron James',
  onChange,
}
