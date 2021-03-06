import 'react-native'
import React from 'react'
import SignIn from '../SignIn'
import renderer from 'react-test-renderer'

jest.mock('react-native-router-flux', () => {
  return {
    Actions: {
      presentationScreen: () => {},
      signUp: () => {}
    }
  }
})

it('renders correctly', () => {
  const tree = renderer.create(
    <SignIn />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
