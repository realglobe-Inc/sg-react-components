/**
 * Test case for sg-theme-style.
 * Runs with mocha.
 */
'use strict'

import SgThemeStyle from '../lib/sg_theme_style'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-theme-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgThemeStyle/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
