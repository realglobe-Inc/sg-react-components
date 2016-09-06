/**
 * Test case for sg-head.
 * Runs with mocha.
 */
'use strict'

import SgHead from '../lib/sg_head'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-head', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgHead/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
