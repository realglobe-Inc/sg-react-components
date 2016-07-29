/**
 * Helper functions for drawing
 */
'use strict'

module.exports = Object.assign(exports, {
  /**
   * Draw a circle
   * @param ctx
   * @param {Point} point
   * @param radius
   */
  drawCircle (ctx, point, radius) {
    ctx.beginPath()
    ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  },

  /**
   * Draw a line
   * @param ctx
   * @param {...Point} points
   */
  drawLine (ctx, ...points) {
    ctx.beginPath()
    for (let i = 0; i < points.length - 1; i++) {
      let from = points[ i ]
      let to = points[ i + 1 ]
      if (i === 0) {
        ctx.moveTo(from.x, from.y)
      }
      ctx.lineTo(to.x, to.y)
    }
    ctx.stroke()
    ctx.closePath()
  }
})

module.exports = exports

/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */
