/**
 * Test case for sg-html.
 * Runs with mocha.
 */
'use strict'

import SgHtml from '../lib/sg_html'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-html', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgHtml/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
