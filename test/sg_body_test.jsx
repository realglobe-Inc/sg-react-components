/**
 * Test case for sg-body.
 * Runs with mocha.
 */
'use strict'

import SgBody from '../lib/sg_body'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-body', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgBody/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
