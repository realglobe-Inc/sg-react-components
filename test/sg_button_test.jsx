/**
 * Test case for sg-button.
 * Runs with mocha.
 */
'use strict'

import SgButton from '../lib/sg_button'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-button', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgButton/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
