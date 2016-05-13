#!/usr/bin/env node

/**
 * Merge master.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')

const REPO = 'upstream'

apeTasking.runTasks('merge', [
  () => apeTasking.execcli('git', [ 'fetch', `${REPO}` ]),
  () => apeTasking.execcli('git', [ 'merge', `${REPO}/master` ]),
], true)

