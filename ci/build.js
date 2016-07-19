#!/usr/bin/env node

/**
 * Build the project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const ababelReact = require('ababel-react')
const abrowserify = require('abrowserify')
const fs = require('fs')
const co = require('co')
const coz = require('coz')

let isForked = process.send

let reflects = [ 'lib/**/*.*', 'doc/demo/**/*.*' ]
runTasks('build', [
  () => coz.render([
    '.*.bud',
    'lib/.*.bud',
    'test/.*.bud'
  ]),
  () => {
    let libDir = `${__dirname}/../lib`
    return ababelReact('*.jsx', {
      cwd: libDir,
      out: libDir,
      reflects
    })
  },
  () => {
    let demoDir = `${__dirname}/../doc/demo`
    return co(function * () {
      if (!fs.existsSync(demoDir)) {
        return
      }
      yield ababelReact('*.jsx', {
        cwd: demoDir,
        out: demoDir,
        minified: true,
        reflects
      })
      yield coz.render(demoDir + '/.*.bud')
      yield abrowserify(
        `${demoDir}/demo.entrypoint.js`,
        `${demoDir}/demo.js`,
        {
          debug: true,
          reflects
        })
    })
  }
], !isForked)

process.on('message', (message) => {
  if (message.rerun) {
    runTasks.rerun()
  }
})
