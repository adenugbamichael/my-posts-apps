import React from 'react'

import Post from './Post'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Post',
  component: Post,
}

const Template = () => (
  <Post
    content='I’m working in Figma trying to design a new website that shows all of
  my tweets!'
    date='11/2/2022'
  />
)

export const Default = Template.bind({})
