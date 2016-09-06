/**
 * Test case for sg-album.
 * Runs with mocha.
 */
'use strict'

import SgAlbum from '../lib/sg_album'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('sg-album', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <SgAlbum/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
