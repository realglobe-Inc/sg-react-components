/**
 * Test case for sg-main.
 * Runs with mocha.
 */
'use strict'

import SgMain from '../lib/sg_main'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-main', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgMain/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
