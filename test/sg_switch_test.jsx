/**
 * Test case for sg-switch.
 * Runs with mocha.
 */
'use strict'

import SgSwitch from '../lib/sg_switch'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-switch', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgSwitch/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
