import React from 'react'

import Bio from './Bio'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Bio',
  component: Bio,
}

const Template = () => (
  <Bio
    headshot='https://pbs.twimg.com/profile_images/1433788266503933956/_B-uvw06_400x400.jpg'
    name='Micke Adenugba'
    tagline='Helping others to learn by doing!'
    role='Frontend Developer @ Foodbuck'
  />
)

export const Default = Template.bind({})
