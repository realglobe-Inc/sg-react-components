/**
 * HTML Component
 * @class SgKinectFrame
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'
import apemancolor from 'apemancolor'
import {depthSpace, jointTypes} from 'sg-kinect-constants'
import * as drawHelper from './helpers/draw_helper'

/** @lends SgKinectFrame */
const SgKinectFrame = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Body frame data from kinect */
    frame: types.array,
    /** Component width */
    width: types.number,
    /** Component height */
    height: types.number,
    /** Highlight color */
    highlightColor: types.string,
    /** Width of lines */
    lineWidth: types.number
  },

  getDefaultProps () {
    return {
      width: depthSpace.BOUND_WIDTH,
      height: depthSpace.BOUND_HEIGHT,
      highlightColor: '#CCCC33',
      lineWidth: 4
    }
  },

  statics: {},

  render () {
    const s = this
    let { state, props } = s
    let { width, height } = props
    return (
      <div className={ classnames('sg-kinnect-joint', props.className) }
           style={ Object.assign({
           }, props.style) }>
        <canvas width={ width * 2 }
                height={ height * 2 }
                style={ Object.assign({
                  width, height
                }) }
                ref={ (canvas) => s.registerCanvas(canvas) }/>
        { props.children }
      </div>
    )
  },

  componentDidMount () {
    const s = this
    let { props } = s
    s.drawBody(props.frame)
  },

  componentDidUpdate () {
    const s = this
    let { props } = s
    s.drawBody(props.frame)
  },

  // --------------------
  // Specs
  // --------------------

  drawBody (bodies) {
    const s = this
    let { canvas } = s

    if (!canvas) {
      return
    }

    const {
      SPINE_BASE, SPINE_MID, NECK, HEAD, SHOULDER_LEFT,
      ELBOW_LEFT, WRIST_LEFT, HAND_LEFT, SHOULDER_RIGHT,
      ELBOW_RIGHT, WRIST_RIGHT, HAND_RIGHT, HIP_LEFT, KNEE_LEFT,
      ANKLE_LEFT, FOOT_LEFT, HIP_RIGHT, KNEE_RIGHT, ANKLE_RIGHT,
      FOOT_RIGHT, SPINE_SHOULDER, HAND_TIP_LEFT, THUMB_LEFT,
      HAND_TIP_RIGHT, THUMB_RIGHT
    } = jointTypes

    let { props } = s
    let { width, height, highlightColor, lineWidth } = props

    let ctx = canvas.getContext('2d')

    const { drawCircle, drawLine } = drawHelper
    let toPoint = (joint) => ({
      x: joint.depthX * width,
      y: joint.depthY * height
    })

    ctx.scale(2, 2)
    ctx.save()
    ctx.clearRect(0, 0, width, height)

    bodies.forEach((body, bodyIndex) => {
      let { joints, tracked } = body
      if (!tracked) {
        return
      }

      let color = apemancolor.rotate(highlightColor, bodyIndex / bodies.length * 360)
      let points = joints.map(toPoint)

      ctx.fillStyle = color
      ctx.strokeStyle = apemancolor.parse(color).alpha(0.66).rgbaString()
      ctx.lineWidth = lineWidth

      let spineB = points[ SPINE_BASE ]
      let spineM = points[ SPINE_MID ]
      let neck = points[ NECK ]
      let head = points[ HEAD ]
      let shoulderL = points[ SHOULDER_LEFT ]
      let elbowL = points[ ELBOW_LEFT ]
      let wristL = points[ WRIST_LEFT ]
      let handL = points[ HAND_LEFT ]
      let shoulderR = points[ SHOULDER_RIGHT ]
      let elbowR = points[ ELBOW_RIGHT ]
      let wristR = points[ WRIST_RIGHT ]
      let handR = points[ HAND_RIGHT ]
      let hipL = points[ HIP_LEFT ]
      let kneeL = points[ KNEE_LEFT ]
      let ankleL = points[ ANKLE_LEFT ]
      let footL = points[ FOOT_LEFT ]
      let hipR = points[ HIP_RIGHT ]
      let kneeR = points[ KNEE_RIGHT ]
      let ankleR = points[ ANKLE_RIGHT ]
      let footR = points[ FOOT_RIGHT ]
      let spineShoulder = points[ SPINE_SHOULDER ]
      let handTipL = points[ HAND_TIP_LEFT ]
      let thumbL = points[ THUMB_LEFT ]
      let handTipR = points[ HAND_TIP_RIGHT ]
      let thumbR = points[ THUMB_RIGHT ]

      // Draw lines
      {
        let linePoints = [
          [ head, neck, spineShoulder, spineM, spineB ],
          [ spineShoulder, shoulderL, elbowL, wristL, handL, handTipL, thumbL ],
          [ spineB, hipL, kneeL, ankleL, footL ],
          [ spineShoulder, shoulderR, elbowR, wristR, handR, handTipR, thumbR ],
          [ spineB, hipR, kneeR, ankleR, footR ]
        ]
        for (let linePoint of linePoints) {
          drawLine(ctx, ...linePoint)
        }
      }

      // Draw circles
      {
        const RADIUS = lineWidth + 1
        let circlePoints = [
          head, neck, spineShoulder, spineM, spineB,
          shoulderL, hipL, elbowL, wristL,
          shoulderR, hipR, elbowR, wristR,
          handL, handTipL, thumbL,
          handR, handTipR, thumbR
        ]
        for (let circlePoint of circlePoints) {
          drawCircle(ctx, circlePoint, RADIUS)
        }
      }
    })
    ctx.restore()
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
