/**
 * Test case for sg-microphone.
 * Runs with mocha.
 */
'use strict'

import SgMicrophone from '../lib/sg_microphone'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-microphone', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgMicrophone/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
