/**
 * Test case for sgHtml.
 * Runs with mocha.
 */
'use strict'

const SgHtml = require('../lib/sg_html.js').default
const React = require('react')
const ReactDOM = require('react-dom/server')
const assert = require('assert')

describe('sg-html', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render component.', () => {
    let html = ReactDOM.renderToString(
      React.createElement(SgHtml, {})
    )
    console.log(html)
    assert.ok(html)
  })
})

/* global describe, before, after, it */
