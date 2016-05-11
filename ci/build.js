#!/usr/bin/env node

/**
 * Build this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const coz = require('coz')

apeTasking.runTasks('build', [
  () => coz.render([
    '.*.bud',
    'doc/**/.*.bud',
    'lib/.*.bud',
    'test/.*.bud'
  ]),
  () => apeTasking.execcli('node', [ './ci/compile.js' ]),
], true)
