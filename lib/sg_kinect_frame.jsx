/**
 * HTML Component
 * @class SgKinectFrame
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'

/** @lends SgKinectFrame */
const SgKinectFrame = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Body frame data from kinect */
    frame: types.object
  },

  render () {
    const s = this
    let { state, props } = s

    return (
      <div className={ classnames('sg-kinnect-joint', props.className) }
           style={ Object.assign({}, props.style) }>
        <canvas ref={ (canvas) => s.registerCanvas(canvas) }/>
        { props.children }
      </div>
    )
  },

  componentDidMount () {
    const s = this
    s.draw()
  },

  componentDidUpdate () {
    const s = this
    s.draw()
  },

  // --------------------
  // Specs
  // --------------------

  draw () {
    const s = this

    let { canvas } = s

    if (!canvas) {
      return
    }

    let ctx = canvas.getContext('2d')

    // Red rectangle
    ctx.beginPath()
    ctx.lineWidth = "6"
    ctx.strokeStyle = "red"
    ctx.rect(5, 5, 290, 140)
    ctx.stroke()

// Green rectangle
    ctx.beginPath()
    ctx.lineWidth = "4"
    ctx.strokeStyle = "green"
    ctx.rect(30, 30, 50, 50)
    ctx.stroke()

// Blue rectangle
    ctx.beginPath()
    ctx.lineWidth = "10"
    ctx.strokeStyle = "blue"
    ctx.rect(50, 50, 150, 80)
    ctx.stroke()
  },

  // --------------------
  // Custom
  // --------------------

  registerCanvas (canvas) {
    const s = this
    s.canvas = canvas
  },

  canvas: null

})

export default SgKinectFrame
