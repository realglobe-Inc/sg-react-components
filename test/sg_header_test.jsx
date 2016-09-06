/**
 * Test case for sg-header.
 * Runs with mocha.
 */
'use strict'

import SgHeader from '../lib/sg_header'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-header', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgHeader/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
