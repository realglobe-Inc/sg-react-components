/**
 * Helper function for colors
 */
'use strict'

const apemancolor = require('apemancolor')

module.exports = Object.assign(exports, {
  randomColor (base) {
    return apemancolor.rotate(base, Math.random())
  }
})
