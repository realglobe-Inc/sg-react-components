/**
 * Test case for sg-page.
 * Runs with mocha.
 */
'use strict'

import SgPage from '../lib/sg_page'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-page', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgPage/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
