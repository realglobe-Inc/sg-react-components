/**
 * Test case for sg-heart.
 * Runs with mocha.
 */
'use strict'

import SgHeart from '../lib/sg_heart'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-heart', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgHeart/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
