#!/usr/bin/env node

/**
 * Build this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const coz = require('coz')

apeTasking.runTasks('build', [
  () => apeTasking.execcli('node', [ './ci/compile.js' ]),
  () => coz.render([
    '.*.bud',
    'doc/**/.*.bud',
    'lib/.*.bud',
    'test/.*.bud'
  ])
], true)
