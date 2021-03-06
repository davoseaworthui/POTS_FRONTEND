/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import AdminMenu from '../components/AdminMenu'

const props = {
  title: 'Admin Menu',
}

describe('Admin Menu', () => {
  test('renders correctly', () => {
    expect(shallow(<AdminMenu {...props} />)).toMatchSnapshot()
  })
})
