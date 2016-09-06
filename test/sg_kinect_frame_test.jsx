/**
 * Test case for sg-kinect-frame.
 * Runs with mocha.
 */
'use strict'

import SgKinectFrame from '../lib/sg_kinect_frame'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-kinect-frame', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgKinectFrame/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
