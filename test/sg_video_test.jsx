/**
 * Test case for sg-video.
 * Runs with mocha.
 */
'use strict'

import SgVideo from '../lib/sg_video'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-video', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgVideo/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
