#!/usr/bin/env node

/**
 * Watch files.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { watchFiles } = require('ape-watching')
const { fork } = require('child_process')

let build = fork('ci/build.js')
let _timer
watchFiles([
  'doc/demo/*.jsx',
  'lib/**/*.jsx'
], (ev, filename) => {
  clearTimeout(_timer)
  _timer = setTimeout(() =>
    build.send({ rerun: { ev, filename } }), 100
  )
})
