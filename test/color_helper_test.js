/**
 * Test case for colorHelper.
 * Runs with mocha.
 */
'use strict'

const colorHelper = require('../lib/helpers/color_helper.js')
const assert = require('assert')
const co = require('co')

describe('color-helper', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Color helper', () => co(function * () {
    for (let i = 0; i < 100; i++) {
      assert.ok(colorHelper.randomColor('#38A'))
    }
  }))
})

/* global describe, before, after, it */
